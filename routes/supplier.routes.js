const router = require('express').Router()
const supplierController = require('../controller/supplier.controller')
const supplier = require('../models/supplier.model')


router.post('/addSupplier', async(req, res) => {
    try {
        const Supplierdata = new supplier(req.body)
        await Supplierdata.save()
        res.send(Supplierdata)
    } catch (e) {
        res.send(e)
    }
})
router.get('/allSupplier', async(req, res) => {
    try {
        const allsupplierData = await supplier.find()
        if (!allsupplierData) res.send('Not Found Any Suppliers')
        res.send(allsupplierData)
    } catch (e) {
        res.send(e)

    }
})

router.get('/allSupplier/:id', async(req, res) => {
    try {
        const singleSupplier = await supplier.findById(req.params.id)
        if (!singleSupplier) res.send('supplier Not Found')
        res.send(singleSupplier)
    } catch (e) {
        res.send(e)
    }
})
router.delete('/allSupplier/:id', async(req, res) => {
    try {
        const deletedSupplier = await supplier.findByIdAndDelete(req.params.id)
        if (!deletedSupplier) res.send('supplier Not found')
        res.send('Supplier Deleted')
    } catch (e) {
        res.send(e)
    }
})

router.patch('/allSupplier/:id', async(req, res) => {
    availableUpdates = ["supplierFirstName", "supplierLastName", "supplierEmail", "supplierMobileNo", "supplierPassword", "supplierCompanyName", "supplierCompanyCountry", "supplierCompanyAddress", "supplierCompanyCity", "supplierCompanyState", "supplierCompanyZipCode", "supplierCompanyFax", "supplierCompanyURL"]
    requested = Object.keys(req.body)
    isValid = requested.every(s => availableUpdates.includes(s))
    if (!isValid) res.send('updates Unavailable')
    try {
        const updatedData = await supplier.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        if (!updatedData) res.send('supplier Not Found')
        res.send('Done,supplier Updated')
    } catch (e) {
        res.send(e)
    }
})




module.exports = router