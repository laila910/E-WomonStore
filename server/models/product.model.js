const validator = require('validator')
const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: true

    },
    status: {
        type: String,
        lowercase: true,
        enum: ["new", "old", "used"],
        default: "new"
    },
    isFeatured: {
        type: Boolean,
        default: false
    },

    Colors: {
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
    },

    productImage: {
        type: String,
        trim: true

    },
    productSizes: [{
        size: {
            type: String,
            trim: true
        },
        number: {
            type: Number,
            trim: true
        }
    }],
    productPrice: {
        type: Number,
        trim: true,
        default: 50
    },
    productQuantity: {
        type: Number,
        trim: true,
        default: 1
    },
    productDescription: {
        type: String,
        trim: true,
        default: ""
    },
    productSpecifications: {
        type: String,
        trim: true,
        default: ""
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        review: {
            type: String,
            trim: true
        },
        rating: { //rating product from 1 to 5 
            type: Number,
            default: 0
        }
    }],
    addTocard: [{

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            trim: true,
            default: 1
        },
        price: {
            type: String,
            trim: true,
            default: 1
        }

    }],


    categories: {

        catName: {
            type: String,
            trim: true,
            enum: ["footwear", "bag", "accessories", "clothing", "eyewear", "watches"]

        }
    },
    brands: {

        brandName: {
            type: String,

            default: ""

        },
        brandImage: {
            type: String,
            default: ""
        }
    }


}, { timeStamps: true })

//handle response 
productSchema.methods.toJSON = function() {
    const product = this.toObject()
    delete product.userId


    delete product.__v
    return product

}
const Product = mongoose.model('Product', productSchema)
module.exports = Product