const validator = require('validator')
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    catName: {
        type: String,

        trim: true,

        required: true


    },
    catDescription: {
        type: String,
        default: ""

    },
    catStatus: {
        type: Boolean,
        default: false
    },
    catCreatedDate: {
        type: Date,
        default: new Date()
    }

}, { timestamps: true })

categorySchema.virtual('myproductswithcategory', {
    ref: "Product",
    localField: "_id",
    foreignField: "catId"
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category