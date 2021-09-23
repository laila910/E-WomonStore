const validator = require('validator')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
    productImages: [{
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
    productSizes: [{
        size: {
            type: String,
            trim: true
        },
        number: {
            type: String,
            trim: true
        }
    }],
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
    }],
    addTocard: [{
        productId: {
            type: String,
            trim: true
        },
        productDetails: {
            type: String,
            trim: true

        },
        quantity: {
            type: Number,
            trim: true

        },
        price: {
            type: Number,
            trim: true
        },
        totalPrice: {
            type: Number,
            trim: true
        }
    }],

    proccessedOrder: {

        default: false,
        type: Boolean

    },
    categories: [{
        catName: {
            type: String,
            trim: true
        },
        catDescription: {
            type: String,
            default: ""
        },
        catStatus: {
            type: Boolean,
            default: false
        }

    }],
    brands: [{
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
    }]


}, { timeStamps: true })

//handle response 
productSchema.methods.toJSON = function() {
    const product = this.toObject()
    delete product.userId
    delete product.proccessedOrder
    delete product.addTocard
    delete product.__v
    return product

}
const Product = mongoose.model('Product', productSchema)
module.exports = Product