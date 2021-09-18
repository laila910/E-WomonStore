const router = require('express').Router()
const ordershipperController = require('../controller/ordershipper.controller')
const ordershipper = require('../models/ordershipper.model')

router.post('/addOrdershipper', async(req, res) => {
    try {
        const ordershipperdataRegister = new ordershipper(req.body)
        await ordershipperdataRegister.save()
        res.send(ordershipperdataRegister)
    } catch (e) {
        res.send(e)

    }
})

router.get('/allOrdershipper', async(req, res) => {
    try {
        const alldata = await ordershipper.find()
        if (!alldata) res.send('no data found')
        res.send(alldata)
    } catch (e) {
        res.send(e)
    }
})

router.get('/allOrdershipper/:id', async(req, res) => {
    try {
        const singledata = await ordershipper.findById(req.params.id)
        if (!singledata) res.send(`ordershipper with id ${req.params.id} Not Found`)
        res.send(singledata)
    } catch (e) {
        res.send(e)

    }
})

router.delete('/allOrdershipper/:id', async(req, res) => {
    try {
        const deleteddata = await ordershipper.findByIdAndDelete(req.params.id)
        if (!deleteddata) req.send(`ordershipper with id ${req.params.id} Not Found`)
        res.send('Done , ordershipper deleted')
    } catch (e) {
        res.send(e)

    }
})

router.patch('/allOrdershipper/:id', async(req, res) => {
    availableUpdates = ["ordershipperFirstName", "ordershipperLastName", "ordershipperEmail", "ordershipperMobileNo", " ordershipperPassword", "ordershipperShippingMethod"]
    requested = Object.keys(req.body)
    isValid = requested.every(o => availableUpdates.includes(o))
    if (!isValid) res.send('Unavailable updates')
    try {
        const updateddata = await ordershipper.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        if (!updateddata) res.send('Ordershipper Not Found')
        res.send('updates Done')


    } catch (e) {
        res.send(e)

    }
})
module.exports = router