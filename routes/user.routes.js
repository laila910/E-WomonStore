const router = require('express').Router()
const userController = require('../controller/user.controller')
const auth = require('../middlewar/auth')
const uploadProfileImage = require('../middlewar/profileImageUpload')
    //register 
router.post('/register', userController.register)
    //add addresses
router.post('/addAddress', auth, userController.addAddress)
    //add profile image
router.post('/addImage', auth, uploadProfileImage.single('profileimage'), userController.addImage)
    //login
router.post('/login', userController.login)
    //logout from one device 
router.post('/logOut', auth, userController.logOut)
    //logout from all devices
router.post('/logOutAll', auth, userController.logOutAll)
    //profile
router.post('/profile', auth, userController.profile)
    //EDIT PROFILE
router.patch('/editProfile', auth, userController.editProfile)
    //send message to the admin
router.post('/sendMessage', auth, userController.sendMessage)
    //allusers
router.get('/allUsers', auth, userController.allUsers)
    //get single user
router.get('/allUsers/:id', auth, userController.singleUser)
    //delete user
router.delete('/allUsers/:id', auth, userController.deleteUser)

module.exports = router
    //update status (admin update status to the users )
    // 6-deactivateAccount
    // 7-activate
    // later