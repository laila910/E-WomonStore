const User = require('../models/user.model')
const emailSettings = require('../helper/sendEmail.helper')
const multer = require('multer')

//register any user and the email is sent to the admin with user data 
const register = async(req, res) => {
    try {
        const userData = new User(req.body)
        await userData.save()
        emailSettings(userData.email, `hey, you successed to register to our Ecommerce ,your account will be activated in two days at least WELCOME AGAIN ${userData.name}!`)
        emailSettings('lailaibrahim798@gmail.com', ` new user in your E-commerce as ${userData.userType} please ,check and activate the account. userId is ${userData._id}!`)

        res.status(200).send({
            apiStatus: true,
            data: 'you are successed to register :) ',
            message: 'register Done'
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'Error In Register'
        })
    }
}

const addAddress = async(req, res) => {
    try {

        userData = req.user
        addr = req.body
        userData.Addresses.push(addr)
        await userData.save()
        res.status(200).send({
            apiStatus: true,
            data: userData,
            message: 'add  adresses'
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'Error In add addresses'
        })
    }
}
const addImage = async(req, res) => {
    if (req.user) {
        try {

            userData = req.user
            image = req.file.path.replace('\\', '/')
            userData.ImageProfile = image

            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: 'add sompany adresses'
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'Error In add addresses'
            })
        }
    }
}
const login = async(req, res) => {
    try {
        let userData = await User.loginUser(req.body.email, req.body.password)
        const token = await userData.generateToken()
        await userData.save()

        res.status(200).send({
                apiStatus: true,
                data: { userData, token },
                message: "success,loggen In"
            }

        )
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "error In logged In "
        })
    }
}
const logOut = async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(singleToken => {
            return singleToken.token != req.token
        })
        await req.user.save()
        res.status(200).send({
            apiStatus: true,
            data: ":(",
            message: "logged out from this device"
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'error'
        })
    }
}
const logOutAll = async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({ apiStatus: true, data: "", message: "logged out from all devices" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
    }
}

const profile = async(req, res) => {
    res.status(200).send({
        apiStatus: true,
        data: req.user,
        message: "data is returned"
    })
}

const editProfile = async(req, res) => {



        avalUpdatates = ["name", "email", "password", "mobileNo", "supplierCompanyName",
            "supplierCompanyURL",
            "supplierCompanyFax", "customerCreditCard", "customerCreditCardTypeId",
            "customerExpMonth",
            "customerExpYr", "customerCVC"
        ]
        requested = Object.keys(req.body)
        isValid = requested.every(r => avalUpdatates.includes(r))
        if (!isValid) res.send('updates unavaliable')
        try {
            const updatedData = await User.findByIdAndUpdate(req.user._id, req.body, { runValidators: true })
            if (!updatedData) res.send('User not found')
            req.user = updatedData
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                data: updatedData,
                message: 'user is updated :)'
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'Error in user updated '
            })
        }
    }
    //any one can send message to the admin 
const sendMessage = async(req, res) => {
    if (req.user.userType != 1) {
        try {

            userData = req.user
            message = req.body
            userData.contactMessages.push(message)
            await userData.save()
            emailSettings('lailaibrahim798@gmail.com', `hey,user with ${req.user} has amessage for you <br> " ${message} `)

            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: 'send message to admin'
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'Error In Send Message'
            })
        }
    }
}
const allUsers = async(req, res) => {
    if ((req.user.userType != 3) && (req.user.accountStatus == true)) {

        try {

            const allUserData = await User.find()
            if (!allUserData) res.send('Not Found Any Users')
            res.status(200).send({
                apiStatus: true,
                data: allUserData,
                message: 'users found :)'
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'users not found'
            })

        }
    }
}

const singleUser = async(req, res) => {
    if (req.user.userType != 3 && req.user.accountStatus == true) {

        try {

            singleUser = await User.findById(req.params.id)
            if (!singleUser) req.send('user Not Found')

            res.status(200).send({
                apiStatus: true,
                data: singleUser,
                message: 'user found :)'
            })

        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'user not found'
            })
        }
    }
}

const deleteUser = async(req, res) => {
        if (req.user.userType == 1) {
            try {

                deletedUser = await User.findByIdAndDelete(req.params.id)
                if (!deletedUser) res.send('User is  not deleted')
                res.status(200).send({
                    apiStatus: true,
                    data: 'User is Deleted',
                    message: 'user deleted Successfuly '
                })
            } catch (e) {
                res.status.send({
                    apiStatus: false,
                    data: e.message,
                    message: 'user is not deleted'
                })
            }
        }
    }
    //activate the status of users by admin after sent the email with the new users 
const activateStatus = async(req, res) => {
    if (req.user.userType == 1) {
        try {
            userData = await User.findById(req.params.id)
            userData.accountStatus = true
            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: 'the status is activated :)'
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: true,
                data: e.message,
                message: 'the status is activated :)'
            })
        }

    }
}
const deactivate = async(req, res) => {
    try {
        deactivateUser = await User.findByIdAndDelete(req.user._id)
        if (!deactivateUser) res.send('User is  not deactivate :(')
        res.status(200).send({
            apiStatus: true,
            data: 'User is deactivate :)',
            message: 'user deleted Successfuly '
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'user can not deactivated :('
        })
    }
}
const processOrder = async(req, res) => {
    if (req.user.userType == 3 && req.user.accountStatus == true) {
        try {

            const user = await User.findById(req.user._id)

            user.proccessedOrder = true
            await user.save()


            res.status(200).send({
                apiStatus: "true",
                data: user,
                message: "process order Done "
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not order now ,Error :("
            })

        }
    }
}
const submitOrder = async(req, res) => {
    if (req.user.userType == 2 && req.user.accountStatus == true) {
        try {

            const customerData = await User.findById(req.params.id)

            customerData.submitOrder = true
            await customerData.save()


            res.status(200).send({
                apiStatus: "true",
                data: customerData,
                message: "submit order to the customer Done "
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not agree of the customers'order,Error :("
            })

        }
    }
}
module.exports = {
    register,
    addAddress,
    addImage,
    login,
    logOut,
    logOutAll,
    profile,
    editProfile,
    sendMessage,
    allUsers,
    singleUser,
    deleteUser,
    activateStatus,
    deactivate,
    allUsers,
    singleUser,
    processOrder,
    submitOrder
}