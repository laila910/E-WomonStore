const validator = require('validator')
const mongoose = require('mongoose')

const ProductReview = new mongoose.model('ProductReview', {
    reviewerName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    reviewerEmail: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid Email')
        }

    },
    reviewerComment: {
        type: String
    },
    reviewMadeDate: {
        type: Date,
        default: new Date()
    }
})

module.exports = ProductReview

// reviewerName
// reviewerEmail
// reviewerComment
// reviewMadeDate : Date with default new Date()