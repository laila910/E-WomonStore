const validator = require('validator')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    catId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    name: {
        type: String,
        trim: true,

        required: true

    },
    status: {
        type: String,
        enum: ["new", "old", "used"]
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    Colors: [{
        firstColor: {
            type: String,
            trim: true
        },
        secondColor: {
            type: String,
            trim: true
        },
        thirdColor: {
            type: String,
            trim: true
        }
    }],
    productFirstImage: [{
        firstImage: {
            type: String,
            trim: true
        },
        secondImage: {
            type: String,
            trim: true
        },
        thirdImage: {
            type: String,
            trim: true
        }
    }],
    productSizes: {
        type: String,
        enum: ["S", "M", "X", "XL"]
    },
    productPrice: {
        type: Number,
        trim: true
    },
    productQuantity: {
        type: Number,
        trim: true
    },
    productDescription: {
        type: String,
        trim: true
    },
    productSpecifications: {
        type: String,
        trim: true
    },
    unitsInStock: {
        type: Number,
        trim: true
    },
    productDiscountAmount: {
        type: Number,
        trim: true
    },
    productDiscountStatus: {
        type: Boolean,
        default: false
    },
    reviews: [{
        userId: {
            type: Number,
            trim: true
        },
        content: {
            type: String,
            trim: true
        }
    }]


}, { timeStamps: true })


const Product = mongoose.model('Product', productSchema)
module.exports = Product