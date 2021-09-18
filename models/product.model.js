const validator = require('validator')
const mongoose = require('mongoose')

const Product = new mongoose.model('Product', {
    productName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 3
    },
    productStatus: {
        type: String,
        enum: ["new", "old", "used"]
    },
    productFeatured: {
        type: Boolean,
        default: false
    },
    productFirstColor: {
        type: String,
        minlength: 2,
        maxlength: 30

    },
    productSecondColor: {
        type: String,
        minlength: 2,
        maxlength: 30

    },
    productThirdColor: {
        type: String,
        minlength: 2,
        maxlength: 30

    },
    productFirstImage: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    productSecondImage: {
        type: String,
        minlength: 2,
        maxlength: 50
    },
    productThirdImage: {
        type: String,
        minlength: 2,
        maxlength: 50
    },
    productSizes: {
        type: String,
        enum: ["S", "M", "X", "XL"]
    },
    productPrice: {
        type: Number
    },
    productQuantity: {
        type: Number
    },
    productDescription: {
        type: String
    },
    productSpecifications: {
        type: String
    },
    unitsInStock: {
        type: Number
    },
    productDiscountAmount: {
        type: Number
    },
    productDiscountStatus: {
        type: Boolean,
        default: false
    },
    productAvailable: {
        type: Boolean,
        default: true
    },
    productMadeDate: {
        type: Date,
        default: new Date()
    }


})

module.exports = Product

// productName
// productCat
// productBrand
// productStatus : enum["new","old","used"]
// productFeatured : Boolean true or false with default false
// productFirstColor:
// productSecondColor: 
// productThirdColor:
// //if there is a way to make the colors pushed in color array direct to each product That I ////entered It
// productFirstImage:
// productSecondImage:
// productThirdImage:
// // bardo zay el colors law feeh 7al l dah ba3deen , Still Remember :)
// productSizes: enum["S","M","L","XL"]
// productPrice:
// productQuantity:
// productDescription:
// productSpecifications:
// unitsInStock:
// productDiscountAmount:
// productDiscountStatus: Boolean  True or False with default false 
// productAvailable: Boolean True or False with default True 
// productMadeDate : Date with default new Date()