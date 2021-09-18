const validator = require('validator')
const mongoose = require('mongoose')

const Supplier = new mongoose.model('Supplier', {
    supplierFirstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    supplierLastName: {
        type: String,
        trim: true,
        lowercase: true,

        minlength: 3,
        maxlength: 20
    },
    supplierEmail: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid Email')
        }
    },
    supplierMobileNo: {
        type: Number,
        validate(value) {
            if (value < 10) throw new Error('Invalid Mobile Number')
        }
    },
    supplierPassword: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 20,
        required: true,
        validate(value) {
            if (value.includes('123')) throw new Error('Invalid Password')
        }
    },
    supplierCompanyName: {
        type: String,
        minlength: 3,
        maxlength: 30
    },
    supplierCompanyAddress: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true

    },
    supplierCompanyCountry: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true

    },
    supplierCompanyCity: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    supplierCompanyState: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    supplierCompanyZipCode: {
        type: Number
    },
    supplierCompanyFax: {
        type: Number
    },
    supplierCompanyURL: {
        type: String,
        validate(value) {
            if (validator.isURL(value)) throw new Error('Invalid URL')
        }
    }
})

module.exports = Supplier