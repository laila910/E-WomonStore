const validator = require('validator')
const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        unique: true
    },
    brandDescription: {
        type: String,
        default: ""
    },
    brandImage: {
        type: String,
        default: ""
    }
}, { timeStamps: true })

brandSchema.virtual('myproductswithBrands', {
    ref: "Product",
    localField: "_id",
    foreignField: "brandId"
})
const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand