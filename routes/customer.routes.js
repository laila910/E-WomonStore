const router = require('express').Router()
const customerController = require('../controller/customer.controller')

const customer = require('../models/customer.model')


router.post('/addCustomer', (req, res) => {
    const myData = new customer(req.body)
    myData.save().then(() => res.send(myData))
        .catch(e => res.send(e))
})

router.post('/registerCustomer', async(req, res) => {
    try {
        const dataregistered = new customer(req.body)
        await dataregistered.save()
        res.send(dataregistered)
    } catch (e) {
        res.send(e)
    }
})

router.get('/allCustomers', async(req, res) => {
    try {
        const allData = await customer.find()
        res.send(allData)
    } catch (e) {
        res.send(e)
    }
})

router.get('/allCustomers/:id', async(req, res) => {
    try {
        const singleCustomerdata = await customer.findById(req.params.id)
        if (!singleCustomerdata) res.send('customer Not Found')
        res.send(singleCustomerdata)
    } catch (e) {
        res.send(e)
    }
})

router.delete('/allCustomers/:id', async(req, res) => {
    try {
        const deletedData = await customer.findByIdAndDelete(req.params.id)
        if (!deletedData) res.send('customer not found')
        res.send('deleted')

    } catch (e) {
        res.send(e)
    }
})

router.patch('/allCustomers/:id', async(req, res) => {
    availableUpdates = ["customerFirstName",
        "customerLastName",
        "customerEmail",
        "customerMobileNo",
        "customerPassword",
        "customerAddress",
        "customerCountry",
        "customerState",
        "customerZipCode",
        "customerCreditCard",
        "customerCreditCardTypeId",
        "customerExpMonth",
        "customerExpYr",
        "customerCVC"
    ]
    requested = Object.keys(req.body)
    isValidToUpdate = requested.every(k => availableUpdates.includes(k))
    if (!isValidToUpdate) res.send("unavailable to updates")

    try {
        const updatedData = await customer.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        if (!updatedData) res.send("Customer Not Valid")
        res.send('updates Done')
    } catch (e) {
        res.send(e)
    }
})
module.exports = router