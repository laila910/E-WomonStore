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
        type: Number,
        trim: true,
        required: true,
        enum: [1, 2, 3]
            // 1 for admin 
            // 2 for supplier 
            // 3 for customer 
    },

    supplierCompanyName: {
        type: String,
        trim: true,
        required: function() { return this.userType == 2 }
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
        required: function() { return this.userType == 2 }
    },
    supplierCompanyURL: {
        type: String,
        validate(value) {
            if (validator.isURL(value)) throw new Error('Invalid URL')
        },
        required: function() { return this.userType == 2 }
    },
    ImageProfile: {
        type: String,
        trim: true
    },
    accountStatus: {
        type: Boolean,
        trim: true,
        default: function() { if (this.userType == 1) return true }
    },
    customerCreditCard: {
        type: String,
        enum: ["visa", "discover", "amex", "mastercard"],
        lowercase: true,
        required: function() { return this.userType == 3 }
    },

    customerExpMonth: {
        type: Number,
        trim: true,
        required: function() { return this.userType == 3 }
    },
    customerExpYr: {
        type: Number,
        trim: true,
        required: function() { return this.userType == 3 }
    },

    contactMessages: [{
        subject: {
            type: String,
            trim: true
        },
        Message: {
            type: String,
            trim: true
        }
    }],
    proccessedOrder: {
        type: Boolean,
        default: false

    },
    submitOrder: {
        type: Boolean,
        default: false
    },
    tokens: [{
        token: { type: String, required: true }
    }]


}, { timestamps: true })

userSchema.virtual('myProducts', {
    ref: "Product",
    localField: "_id",
    foreignField: "userId"
})

//handle response 
userSchema.methods.toJSON = function() {
        const user = this.toObject()
        delete user.password
        delete user.contactMessages
        delete user.submitOrder
        delete user.__v
        delete user.tokens
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
userSchema.statics.loginUser = async function(email, password) {
    const user = await User.findOne({ email })
    if (!user) throw new Error('Invalid email')
    const isMatchPass = await bcrypt.compare(password, user.password)
    if (!isMatchPass) throw new Error('invalid password')
    return user
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