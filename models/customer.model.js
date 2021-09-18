const validator = require('validator')
const mongoose = require('mongoose')

const Customer = new mongoose.model('Customer', {
    customerFirstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    customerLastName: {
        type: String,
        trim: true,
        lowercase: true,

        minlength: 3,
        maxlength: 20
    },
    customerEmail: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid Email')
        }

    },
    customerMobileNo: {
        type: Number,
        validate(value) {
            if (value < 10) throw new Error('Invalid Mobile Number')
        }
    },
    customerPassword: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 20,
        required: true,
        validate(value) {
            if (value.includes('123')) throw new Error('Invalid Password')
        }
    },
    customerAddress: {
        type: String,
        minlength: 10,
        maxlength: 50,
        required: true

    },
    customerCountry: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    customerState: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    customerZipCode: {
        type: Number,
        maxlength: 8
    },
    customerCreditCard: {
        type: String,
        enum: ["visa", "discover", "amex", "mastercard"],
        lowercase: true,
        required: true
    },
    customerCreditCardTypeId: {
        type: Number,
        trim: true,
        required: true,
        validate(value) {
            if (value < 3) throw new Error('your creditcard Id must be 3 ')
        }
    },
    customerExpMonth: {
        type: Number,
        trim: true
    },
    customerExpYr: {
        type: Number,
        trim: true
    },
    customerCVC: {
        type: "Number",
        trim: true
    },
    customerDateRegistered: {
        type: Date,
        default: new Date()
    }
})








module.exports = Customer