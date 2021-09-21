const router = require('express').Router()

const productController = require('../controller/product.controller')
const Product = require('../models/product.model')


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

router.post('/addProduct', auth, async(req, res) => {
        try {
            if (req.user.userType == "supplier") {
                product = new Product({
                    ...req.body,
                    userId: req.user._id,
                    catId: req.category._id,
                    brandId: req.brand._id
                })
            }
            await product.save()
            res.status(200).send({ apiStatus: true, data: product, message: "product added" })
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error adding product data" })
        }
    })
    //add To card
router.post('/addedTocard', auth, async(req, res) => {
        try {
            if (req.user.userType == "customer") {
                const product = await Product.findById(req.params.id)
                const addtocardData = {
                    productId: req.params.id,
                    productDetails: product.productDescription + product.productSpecifications,
                    quantity: req.body.quantity,
                    price: product.price,
                    totalPrice: quantity * price

                }
                product.addTocard.push(addtocardData)
                await product.save()


                res.status(200).send({
                    apiStatus: "true",
                    data: product,
                    message: " added to card successfuly "
                })
            }
        } catch (e) {
            res.send(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add to card,Error :("
            })

        }
    })
    //processed Order
router.post('/Processtheorder', auth, async(req, res) => {
        try {
            if (req.user.userType == "customer") {
                const product = await Product.findById(req.params.id)
                const statusOfOrder = req.body
                product.processedOrder.push(statusOfOrder)
                await product.save()


                res.status(200).send({
                    apiStatus: "true",
                    data: product,
                    message: "process order Done "
                })
            }
        } catch (e) {
            res.send(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not assign Task ,Error :("
            })

        }
    })
    //submit order 
router.post('/submitTheOrderOfCustomer', auth, async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            const product = await Product.findById(req.params.id)
            const submitOfOrder = req.body
            product.submitOrder.push(submitOfOrder)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "submit order to the customer Done "
            })
        }
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not agree of the customers'order,Error :("
        })

    }
})
module.exports = router