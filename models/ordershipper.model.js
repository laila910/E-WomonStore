const validator = require('validator')
const mongoose = require('mongoose')

const OrderShipper = new mongoose.model('OrderShipper', {
    ordershipperFirstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    ordershipperLastName: {
        type: String,
        trim: true,
        lowercase: true,

        minlength: 3,
        maxlength: 20
    },
    ordershipperEmail: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid Email')
        }

    },
    ordershipperMobileNo: {
        type: Number,
        validate(value) {
            if (value < 10) throw new Error('Invalid Mobile Number')
        }
    },
    ordershipperPassword: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 20,
        required: true,
        validate(value) {
            if (value.includes('123')) throw new Error('Invalid Password')
        }
    },
    ordershipperShippingMethod: {
        type: String,
        trim: true,
        lowercase: true,

        minlength: 3
    },
    ordershipperRegisterDate: {
        type: Date,
        default: new Date()
    }

})

module.exports = OrderShipper