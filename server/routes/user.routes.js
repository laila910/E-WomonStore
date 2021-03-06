const router = require('express').Router()
const userController = require('../controller/user.controller')
const auth = require('../middlewar/auth')
const uploadProfileImage = require('../middlewar/profileImageUpload')
    //register :) but send email is not working perfectly :(
router.post('/register', userController.register)
    //login :) 
router.post('/login', userController.login)
    //add addresses :)
router.post('/addAddress', auth, userController.addAddress)
    //add profile image :)
router.post('/addImage', auth, uploadProfileImage.single('ImageProfile'), userController.addImage)

//logout from one device :)
router.post('/logOut', auth, userController.logOut)
    //logout from all devices :)
router.post('/logOutAll', auth, userController.logOutAll)
    //profile :)
router.post('/profile', auth, userController.profile)
    //EDIT PROFILE :)
router.patch('/editProfile', auth, userController.editProfile)

//send message to the admin :) I have an issue with email handling :(
router.post('/sendMessage', auth, userController.sendMessage)
    //allusers :) show only for admin :)
router.get('/allUsers', auth, userController.allUsers)
    //get single user :) show only for admin:)
router.get('/allUsers/:id', auth, userController.singleUser)
    //delete user :) by admin **
router.delete('/allUsers/:id', auth, userController.deleteUser)
    //activate status (admin update status to the users ) :) **
router.post('/activateStatus/:id', auth, userController.activateStatus)
    //deactivate account :)
router.post('/deactivate', auth, userController.deactivate)
    //processed Order by customer :)
router.post('/processOrder', auth, userController.processOrder)
    //submit order by supplier 
router.post('/submitCustomerOrder/:id', auth, userController.submitOrder)
module.exports = router