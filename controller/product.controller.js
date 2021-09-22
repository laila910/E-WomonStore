const Product = require('../models/product.model')

const addProduct = async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            product = new Product({
                ...req.body,
                userId: req.user._id
            })
        }
        await product.save()
        res.status(200).send({ apiStatus: true, data: product, message: "product added" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: "error adding product data" })
    }
}

const addCategory = async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            const product = await Product.findById(req.params.id)
            const category = req.body
            product.categories.push(category)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "category is added :) "
            })
        }
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not add category,Error :("
        })

    }
}
const addBrand = async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            const product = await Product.findById(req.params.id)
            const brand = {
                brandImage: req.file.path.replace('\\', '/'),
                ...req.body
            }
            product.brands.push(brand)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "brand is added :) "
            })
        }
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not add brand,Error :("
        })

    }
}
const allProducts = async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            const allproducts = await Product.find()
            if (!allproducts) res.send('products Not Found')
            res.send(allproducts)


        }
    } catch (e) {
        res.send(e)
    }

}
const singleProduct = async(req, res) => {
    try {
        const singleProduct = await Product.findById(req.params.id)
        if (!singleProduct) res.send(`product with id ${req.params.id} Not Found`)
        res.send(singleProduct)
    } catch (e) {
        res.send(e)
    }
}
const deleteProduct = async(req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) res.send(`product with id ${req.params.id} Not Found`)
        res.send('Done,Product Deleted')
    } catch (e) {
        res.send(e)
    }
}
const editProduct = async(req, res) => {
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
}
const addToCard = async(req, res) => {
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
}
const processOrder = async(req, res) => {
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
}
const submitOrder = async(req, res) => {
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
}
addColors = async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            const product = await Product.findById(req.params.id)
            const colors = req.body
            product.Colors.push(colors)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "colors of product is added :) "
            })
        }
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not add colors,Error :("
        })

    }
}
addPImages = async(req, res) => {
    try {
        if (req.user.userType == "supplier") {
            const product = await Product.findById(req.params.id)
            const images = {
                firstImage: req.file.path.replace('\\', '/'),
                secondImage: req.file.path.replace('\\', '/'),
                thirdImage: req.file.path.replace('\\', '/')
            }
            product.productImages.push(images)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "Images of product is added :) "
            })
        }
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not add images ,Error :("
        })

    }
}
module.exports = {
    addProduct,
    addCategory,
    addBrand,
    allProducts,
    singleProduct,
    deleteProduct,
    editProduct,
    addToCard,
    processOrder,
    submitOrder,
    addColors,
    addPImages
}