const Product = require('../models/product.model')
const multer = require('multer')
const addProduct = async(req, res) => {
    if (req.user.userType == "supplier" && req.user.accountStatus == true) {
        try {

            product = new Product({
                ...req.body,
                userId: req.user._id
            })
            await product.save()
            res.status(200).send({ apiStatus: true, data: product, message: "product added" })
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error adding product data" })
        }

    }
}

const addCategory = async(req, res) => {

    if (req.user.userType == "supplier" && req.user.accountStatus == true) {
        try {
            productData = await Product.findById(req.params.id)
            category = req.body
            productData.categories.push(category)
            await productData.save()


            res.status(200).send({
                apiStatus: "true",
                data: productData,
                message: "category is added :) "
            })

        } catch (e) {
            res.send(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add category,Error :("
            })

        }
    }

}

const addBrand = async(req, res) => {
        if (req.user.userType == "supplier" && req.user.accountStatus == true) {
            try {

                product = await Product.findById(req.params.id)
                brand = {
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
            } catch (e) {
                res.status(500).send({
                    apiStatus: "false",
                    data: e.message,
                    message: "can not add brand,Error :("
                })

            }
        }
    }
    //any one can see all product by normal after ligin  or without login
const allProducts = async(req, res) => {
        try {

            const allproducts = await Product.find()
            if (!allproducts) res.send('products Not Found')

            res.status(200).send({
                apiStatus: "true",
                data: allproducts,
                message: "all Products :) "
            })


        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'error :('
            })
        }

    }
    //any one can see any product after login by normal or without login 
const singleProduct = async(req, res) => {
    try {
        const singleProduct = await Product.findById(req.params.id)
        if (!singleProduct) res.send(`product with id ${req.params.id} Not Found`)
        res.status(200).send({
            apiStatus: true,
            data: singleProduct,
            message: 'success in view product'
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'error :('
        })
    }
}
const addSizes = async(req, res) => {
    if (req.user.userType == "supplier" && req.user.accountStatus == true) {
        try {

            const product = await Product.findById(req.params.id)
            const sizes = req.body
            product.productSizes.push(sizes)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "sizes are added :) "
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add sizes,Error :("
            })

        }
    }
}

const editProduct = async(req, res) => {
    if (req.user.userType == "supplier" && req.user.accountStatus == true) {
        availableupdates = ["name", "status", "isFeatured ",
            "productPrice", "productQuantity", "productDescription", "productSpecifications",
            "unitsInStock", "productDiscountAmount", "productDiscountStatus", "productAvailable"
        ]
        requested = Object.keys(req.body)
        isValid = requested.every(p => availableupdates.includes(p))
        if (!isValid) res.send('unavailable updates')
        try {
            const updatedData = await Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
            if (!updatedData) res.send('unavailable updates')
            res.status(200).send({
                apiStatus: true,
                data: 'Done,Updated product',
                message: "data is updated"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'data can not updated'
            })
        }
    }
}
addColors = async(req, res) => {
    if (req.user.userType == "supplier" && req.user.accountStatus == true) {
        try {

            const product = await Product.findById(req.params.id)
            const colors = req.body
            product.Colors.push(colors)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "colors of product is added :) "
            })
        } catch (e) {
            res.send(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add colors,Error :("
            })

        }
    }
}

addPImages = async(req, res) => {
    if (req.user.userType == "supplier" && req.user.accountStatus == true) {
        try {

            const product = await Product.findById(req.params.id)
            const image = req.file.path.replace('\\', '/')



            product.productImages.push(image)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "Image of product is added :) "
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add image ,Error :("
            })

        }
    }
}

const addReview = async(req, res) => {
    if (req.user.userType == "customer" && req.user.accountStatus == true) {
        try {

            const product = await Product.findById(req.params.id)
            const review = {
                ...req.body,
                userId: req.user._id
            }
            product.reviews.push(review)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product,
                message: "review is added :) "
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add review,Error :("
            })

        }
    }
}
const addToCard = async(req, res) => {
    if (req.user.userType == "customer" && req.user.accountStatus == true) {
        try {

            product = await Product.findById(req.params.id)
            let addtocardData = {}
            addtocardData.productId = req.params.id
            addtocardData.userId = req.user._id
            addtocardData.quantity = req.body.quantity
            addtocardData.price = parseInt(product.productPrice, 10)
            totalPrice = addtocardData.quantity * addtocardData.price
            addtocardData.totalPrice = parseInt(totalPrice, 10)


            product.addTocard.push(addtocardData)
            await product.save()


            res.status(200).send({
                apiStatus: "true",
                data: product.addTocard,
                message: " added to card successfuly "
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add to card,Error :("
            })

        }
    }

}
const deleteProduct = async(req, res) => {
    if (req.user.userType == "supplier" && req.user.accountStatus == true) {
        try {

            const deletedProduct = await Product.findByIdAndDelete(req.params.id)
            if (!deletedProduct) res.send(`product with id ${req.params.id} Not Found`)
            res.status(200).send({
                apiStatus: true,
                data: 'Done,Product Deleted',
                message: 'you are successed to delete :) '
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: 'can not deleted product :( '
            })
        }
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
    addColors,
    addPImages,
    addSizes,
    addReview
}