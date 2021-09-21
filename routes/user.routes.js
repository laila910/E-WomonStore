const router = require('express').Router()
const userController = require('../controller/user.controller')
const User = require('../models/user.model')
const emailSettings = require('../helper/sendEmail.helper')
const auth = require('../middlewar/auth')

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
//9-add supplier addresses


//register 
router.post('/register', async(req, res) => {
        try {
            const supplierdata = new User(req.body)
            await supplierdata.save()
            emailSettings(supplierdata.email, "text  Email")
            res.status(200).send({
                apiStatus: true,
                data: supplierdata,
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
    //add supplier addresses
router.post('/addAddress/:id', async(req, res) => {
        try {
            const userData = await User.findById(req.params.id)
            const addr = req.body
            userData.supplierCompanyAddress.push(addr)
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
    })
    //login
router.post('/login', async(req, res) => {
    try {
        let userData = await User.loginSupplier(req.body.email, req.body.password)
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
router.post('/logOutAll', auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({ apiStatus: true, data: "", message: "logged out from all devices" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
    }
})

router.post('/me', auth, async(req, res) => { res.send(req.user) })

// router.get('/allSupplier', async(req, res) => {
//     try {
//         const allsupplierData = await supplier.find()
//         if (!allsupplierData) res.send('Not Found Any Suppliers')
//         res.send(allsupplierData)
//     } catch (e) {
//         res.send(e)

//     }
// })

// router.get('/allSupplier/:id', async(req, res) => {
//     try {
//         const singleSupplier = await supplier.findById(req.params.id)
//         if (!singleSupplier) res.send('supplier Not Found')
//         res.send(singleSupplier)
//     } catch (e) {
//         res.send(e)
//     }
// })
// router.delete('/allSupplier/:id', async(req, res) => {
//     try {
//         const deletedSupplier = await supplier.findByIdAndDelete(req.params.id)
//         if (!deletedSupplier) res.send('supplier Not found')
//         res.send('Supplier Deleted')
//     } catch (e) {
//         res.send(e)
//     }
// })

// router.patch('/allSupplier/:id', async(req, res) => {
//     availableUpdates = ["supplierFirstName", "supplierLastName", "supplierEmail", "supplierMobileNo", "supplierPassword", "supplierCompanyName", "supplierCompanyCountry", "supplierCompanyAddress", "supplierCompanyCity", "supplierCompanyState", "supplierCompanyZipCode", "supplierCompanyFax", "supplierCompanyURL"]
//     requested = Object.keys(req.body)
//     isValid = requested.every(s => availableUpdates.includes(s))
//     if (!isValid) res.send('updates Unavailable')
//     try {
//         const updatedData = await supplier.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
//         if (!updatedData) res.send('supplier Not Found')
//         res.send('Done,supplier Updated')
//     } catch (e) {
//         res.send(e)
//     }
// })




module.exports = router