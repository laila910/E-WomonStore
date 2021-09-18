const router = require('express').Router()
const { isValidObjectId } = require('mongoose')
const productController = require('../controller/product.controller')
const product = require('../models/product.model')

router.post('/addProduct', async(req, res) => {
    try {
        const data = new product(req.body)
        await data.save()
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})

router.get('/allProduct', async(req, res) => {
    try {
        const allproducts = await product.find()
        if (!allproducts) res.send('products Not Found')
        res.send(allproducts)
    } catch (e) {
        res.send(e)
    }
})
router.get('/allProduct/:id', async(req, res) => {
    try {
        const singleProduct = await product.findById(req.params.id)
        if (!singleProduct) res.send(`product with id ${req.params.id} Not Found`)
        res.send(singleProduct)
    } catch (e) {
        res.send(e)
    }
})

router.delete('/allProduct/:id', async(req, res) => {
    try {
        const deletedProduct = await product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) res.send(`product with id ${req.params.id} Not Found`)
        res.send('Done,Product Deleted')
    } catch (e) {
        res.send(e)
    }
})

router.patch('/allProduct/:id', async(req, res) => {
    availableupdates = ["productName", "productStatus", "productFeatured ", "productFirstColor", "productSecondColor", "productThirdColor", "productFirstImage",
        "productSecondImage", "productThirdImage", "productSizes", "productPrice", "productQuantity", "productDescription", "productSpecifications",
        "unitsInStock", "productDiscountAmount", "productDiscountStatus", "productAvailable"
    ]
    requested = Object.keys(req.body)
    isValid = requested.every(p => availableupdates.includes(p))
    if (!isValid) res.send('unavailable updates')
    try {
        const updatedData = await product.findByIdAndUpdate(req.params.id, req.body, { runValidator: true })
        if (!updatedData) res.send('unavailable updates')
        res.send('Done,Updated product')
    } catch (e) {
        res.send(e)
    }
})
module.exports = router