const router = require('express').Router()
const supplierController = require('../controller/supplier.controller')
const Supplier = require('../models/supplier.model')
const emailSettings = require('../helper/sendEmail.helper')

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
            const Supplierdata = new Supplier(req.body)
            await Supplierdata.save()
            emailSettings(supplierData.supplierEmail, "text  Email")
            res.status(200).send({
                apiStatus: true,
                data: Supplierdata,
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
            const supplierData = await Supplier.findById(req.params.id)
            const addr = req.body
            supplierData.supplierCompanyAddress.push(addr)
            await supplierData.save()
            res.status(200).send({
                apiStatus: true,
                data: supplierData,
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
        let supplierData = await Supplier.loginSupplier(req.body.supplierEmail, req.body.supplierPassword)
        res.status(200).send({
                apiStatus: true,
                data: supplierData,
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