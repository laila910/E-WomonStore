const validator = require('validator')
const mongoose = require('mongoose')

const Category = new mongoose.model('Category', {
    catName: {
        type: String,
        enum: ["footwear", "clothing", "watches", "jewelry", "bags", "accessories", "eyewear"],
        trim: true,
        lowercase: true,
        required: true,
        minlength: 4,
        maxlength: 11

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

})



module.exports = Category