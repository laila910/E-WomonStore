const router = require('express').Router()
const customerController = require('../controller/customer.controller')

const customer = require('../models/customer.model')
router.post('/addCustomer', (req, res) => {
    const myData = new customer(req.body)
    myData.save().then(() => res.send(myData))
        .catch(e => res.send(e))
})





module.exports = router