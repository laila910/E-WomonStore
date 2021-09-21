const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({

        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) throw new Error('Invalid Email')
            }
        },
        mobileNo: {
            type: String,
            trim: true,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value, ['ar-EG'])) throw new Error('Invalid Mobile Number')
            }
        },
        password: {
            type: String,
            trim: true,

            required: true


        },
        userType: {
            type: String,
            trim: true,
            required: true,
            enum: ["admin", "supplier", "ordershipper", "customer"]
        },

        supplierCompanyName: {
            type: String,
            trim: true,
            required: function() { return this.userType == "supplier" }
        },
        Addresses: [{
            addrType: {
                type: String,
                trim: true
            },
            addrDetails: {
                type: String,
                trim: true
            }
        }],
        supplierCompanyFax: {
            type: String,
            trim: true,
            required: function() { return this.userType == "supplier" }
        },
        supplierCompanyURL: {
            type: String,
            validate(value) {
                if (validator.isURL(value)) throw new Error('Invalid URL')
            },
            required: function() { return this.userType == "supplier" }
        },
        ImageProfile: {
            type: String,
            trim: true
        },
        accountStatus: {
            type: Boolean,
            trim: false
        },
        customerCreditCard: {
            type: String,
            enum: ["visa", "discover", "amex", "mastercard"],
            lowercase: true,
            required: function() { return this.userType == "customer" }
        },
        customerCreditCardTypeId: {
            type: Number,
            trim: true,

            validate(value) {
                if (value < 3) throw new Error('your creditcard Id must be 3 ')
            },
            required: function() { return this.userType == "customer" }
        },
        customerExpMonth: {
            type: Number,
            trim: true,
            required: function() { return this.userType == "customer" }
        },
        customerExpYr: {
            type: Number,
            trim: true,
            required: function() { return this.userType == "customer" }
        },
        customerCVC: {
            type: "Number",
            trim: true,
            required: function() { return this.userType == "customer" }
        },
        ordershipperShippingMethod: {
            type: String,
            trim: true,
            lowercase: true,

            required: function() { return this.userType == "ordershipper" }
        },
        contactMessages: [{
            subject: {
                type: String,
                trim: true,
                validate(value) {
                    if (this.userType != "admin") {

                    }
                }
            },
            Message: {
                type: String,
                trim: true,
                validate(value) {
                    if (this.userType == "admin") {

                    }
                }
            }
        }],
        addTocard: [{
            productId: {
                type: String,
                trim: true,
                validate(value) {
                    if (this.userType == "customer") {

                    }
                }
            },
            productDetails: {
                type: String,
                trim: true,
                validate(value) {
                    if (this.userType == "customer") {

                    }
                }
            },
            productquantity: {
                type: String,
                trim: true,
                validate(value) {
                    if (this.userType == "customer") {

                    }
                }
            }
        }],
        proccessedOrder: [{
            status: {
                default: false,
                type: Boolean,
                validate(value) {
                    if (this.userType == "customer") {

                    }
                }
            }
        }],
        submitOrder: [{
            type: Boolean,
            default: false,
            validate(value) {
                if (this.userType == "supplier") {

                }
            }
        }],
        tokens: [{
            token: { type: String, required: true }
        }]


    }, { timestamps: true })
    //handle response 
userSchema.methods.toJSON = function() {
        const user = this.toObject()
        delete user.password
        delete user.__v
        return user

    }
    // encrypt password
userSchema.pre('save', async function() {
        const user = this
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 12)
        }

    })
    //login
userSchema.statics.loginSupplier = async function(email, password) {
    const supplier = await User.findOne({ email })
    if (!supplier) throw new Error('Invalid email')
    const isMatchPass = await bcrypt.compare(password, supplier.password)
    if (!isMatchPass) throw new Error('invalid password')
    return supplier
}

//generate Tokens 
userSchema.methods.generateToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWTKEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}


const User = mongoose.model('User', userSchema)
module.exports = User