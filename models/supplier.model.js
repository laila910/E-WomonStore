const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const supplierSchema = new mongoose.Schema({
        supplierFirstName: {
            type: String,
            trim: true,
            lowercase: true,
            required: true
        },
        supplierLastName: {
            type: String,
            trim: true,
            lowercase: true,
            required: true
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
            type: String,
            trim: true,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value, ['ar-EG'])) throw new Error('Invalid Mobile Number')
            }
        },
        supplierPassword: {
            type: String,
            trim: true,

            required: true,
            match: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.\]).{8,32}$/


        },
        supplierCompanyName: {
            type: String,
            trim: true
        },
        supplierCompanyAddress: [{
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
            trim: true
        },
        supplierCompanyURL: {
            type: String,
            validate(value) {
                if (validator.isURL(value)) throw new Error('Invalid URL')
            }
        },
        supplierImageProfile: {
            type: String,
            trim: true
        },
        accountStatus: {
            type: Boolean,
            trim: false
        }
    }, { timestamps: true })
    //handle response 
supplierSchema.methods.toJSON = function() {
        const supplier = this.toObject()
        delete supplier.supplierPassword
        delete supplier.__v
        return supplier

    }
    // encrypt password
supplierSchema.pre('save', async function() {
        const supplier = this
        if (supplier.isModified('supplierPassword')) {
            supplier.supplierPassword = await bcrypt.hash(supplier.supplierPassword, 12)
        }

    })
    //login
supplierSchema.statics.loginSupplier = async function(email, password) {
    const supplier = await Supplier.findOne({ email })
    if (!supplier) throw new Error('Invalid email')
    const isMatchPass = await bcrypt.compare(password, supplier.supplierPassword)
    if (!isMatchPass) throw new Error('invalid password')
    return supplier
}


const Supplier = mongoose.model('Supplier', supplierSchema)
module.exports = Supplier