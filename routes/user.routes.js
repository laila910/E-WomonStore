const router = require('express').Router()
const userController = require('../controller/user.controller')
const User = require('../models/user.model')
const emailSettings = require('../helper/sendEmail.helper')
const auth = require('../middlewar/auth')
const uploadProfileImage = require('../middlewar/profileImageUpload')

// 1-register
// 2-login
// 3-logout
// 4-profile
// 5-editProfile
// 6-deactivateAccount
// 7-activate
//  #notes:
//  password must be encrypted
// 8-sendEmailToAdmin 
//9-add user addresses


//register 
router.post('/register', async(req, res) => {
        try {
            const userData = new User(req.body)
            await userData.save()
            emailSettings(userData.email, "text  Email")
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
    })
    //add addresses
router.post('/addAddress', auth, async(req, res) => {
        try {
            if (req.user) {
                userData = new User.findById(req.user._id)
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
    })
    //add profile image
router.post('/addImage', auth, uploadProfileImage.single('profileimage'), async(req, res) => {
        try {
            if (req.user) {
                userData = await User.findById(req.params.id)
                image = req.body
                userData.ImageProfile.push(image)
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
    })
    //login
router.post('/login', async(req, res) => {
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
    })
    //logout from one device 
router.post('/logOut', auth, async(req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(singleToken => {
                return singleToken.token != req.token
            })
            req.user.save()
            res.send({ apiStatus: true, data: "", message: "logged out from this device" })
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
        }
    })
    //logout from all devices
router.post('/logOutAll', auth, async(req, res) => {
        try {
            req.user.tokens = []
            await req.user.save()
            res.send({ apiStatus: true, data: "", message: "logged out from all devices" })
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
        }
    })
    //profile
router.post('/me', auth, async(req, res) => { res.send(req.user) })

//EDIT PROFILE
router.patch('/editProfile', auth, async(req, res) => {

        if (req.user) {
            //indeicate later what types of edits That User can do 
            avalUpdatates = ["name", "email", "password", "mobileNo"]
            requested = Object.keys(req.body)
            isValid = requested.every(r => avalUpdatates.includes(r))
            if (!isValid) res.send('updates unavaliable')
            try {
                const updatedData = await User.findByIdAndUpdate(req.user._id, req.body, { runValidators: true })
                if (!updatedData) res.send('User not found')
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
    })
    //send message to the admin
router.post('/sendMessage', auth, async(req, res) => {
    try {
        if (req.user.userType != "admin") {
            user = new User.findById(req.user._id)
            message = req.body
            await user.contactMessages.push(message)
            emailSettings(req.user.email, message)
            res.status(200).send({
                apiStatus: true,
                data: user,
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
})
router.get('/allUsers', auth, async(req, res) => {
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
})

router.get('/allUsers/:id', auth, async(req, res) => {
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
})
router.delete('/allUsers/:id', auth, async(req, res) => {
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
})





module.exports = router