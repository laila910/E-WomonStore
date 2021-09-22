const User = require('../models/user.model')
const emailSettings = require('../helper/sendEmail.helper')

//register any user and the email is sent to the admin with user data 
const register = async(req, res) => {
        try {
            const userData = new User(req.body)
            await userData.save()
            emailSettings(userData.email, 'hey, you successed to register to our Ecommerce ,your account will be activated in two days at least . WELCOME AGAIN!')
            emailSettings('lailaibrahim798@gmail.com', `hey, new register to your website with data ${req.user}`)
            res.status(200).send({
                apiStatus: true,
                data: userData,
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
    //activate the status of users by admin after sent the email with the new users 
const activateStatus = async(req, res) => {
    if (req.user.userType == "admin") {
        userData = await User.findById(req.params.id)
        userData.accountStatus = true
        await userData.save()
        res.status(200).send({
            apiStatus: true,
            data: userData,
            message: 'the status is activated :)'
        })


    }
}
const addAddress = async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            userData = req.user
            addr = req.body
            userData.Addresses.push(addr)
            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: 'add  adresses'
            })
        }
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'Error In add addresses'
        })
    }
}
const addImage = async(req, res) => {
    try {
        if (req.user) {
            userData = req.user
            image = req.file.path.replace('\\', '/')
            userData.ImageProfile = image

            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: 'add sompany adresses'
            })
        }
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'Error In add addresses'
        })
    }
}
const login = async(req, res) => {
    try {
        let userData = await User.loginUser(req.body.email, req.body.password)
        const token = await userData.generateToken()
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
        req.user.save()
        res.send({ apiStatus: true, data: "", message: "logged out from this device" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
    }
}
const logOutAll = async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({ apiStatus: true, data: "", message: "logged out from all devices" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
    }
}
const profile = async(req, res) => { res.send(req.user) }

const editProfile = async(req, res) => {

    if (req.user) {

        avalUpdatates = ["name", "email", "password", "mobileNo"]
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
}
const sendMessage = async(req, res) => {
    try {
        if (req.user.userType != "admin") {
            userData = req.user
            message = req.body
            userData.contactMessages.push(message)
            await userData.save()
            emailSettings(req.user.email, message)
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: 'send message to admin'
            })
        }
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'Error In Send Message'
        })
    }
}
const allUsers = async(req, res) => {
    try {
        if (req.user.userType == "admin") {
            const allUserData = await User.find()
            if (!allUserData) res.send('Not Found Any Users')
            res.status(200).send({
                apiStatus: true,
                data: allUserData,
                message: 'users found :)'
            })
        }
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'users not found'
        })

    }
}
const singleUser = async(req, res) => {
    try {
        if (req.user.userType == "admin") {
            singleUser = await User.findById(req.params.id)
            if (!singleUser) res.status(200).send({
                apiStatus: true,
                data: singleUser,
                message: 'user found :)'
            })
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'user not found'
            })
        }
    } catch (e) {
        res.send(e)
    }
}
const deleteUser = async(req, res) => {
    try {
        if (req.user.userType == "admin") {
            deletedUser = await User.findByIdAndDelete(req.params.id)
            if (!deletedUser) res.send('User is  not deleted')
            res.status(200).send({
                apiStatus: true,
                data: 'User is Deleted',
                message: 'user deleted Successfuly '
            })
        }
    } catch (e) {
        res.status.send({
            apiStatus: false,
            data: e.message,
            message: 'user is not deleted'
        })
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
    deleteUser
}