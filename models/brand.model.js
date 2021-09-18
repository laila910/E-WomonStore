const validator = require('validator')
const mongoose = require('mongoose')

const Brand = new mongoose.model('Brand', {
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
})
module.exports = Brand


// brandName
// brandImage