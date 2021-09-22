const router = require('express').Router()
const uploadbrandImage = require('../middlewar/imagebrandUpload')
const auth = require('../middlewar/auth')
const productController = require('../controller/product.controller')
    //add Product-> tested :)
router.post('/addProduct', auth, productController.addProduct)
    //add category ->tested :)
router.post('/addCat/:id', auth, productController.addCategory)
    //add brands ->tested:)
router.post('/addBrand/:id', auth, uploadbrandImage.single('brandImage'), productController.addBrand)
    //---------------------
router.get('/allProduct', productController.allProducts)

router.get('/allProduct/:id', productController.singleProduct)

router.delete('/allProduct/:id', productController.deleteProduct)

router.patch('/allProduct/:id', productController.editProduct)
    //add To card
router.post('/addedTocard', auth, productController.addToCard)
    //processed Order
router.post('/Processtheorder', auth, productController.processOrder)
    //submit order 
router.post('/submitTheOrderOfCustomer', auth, productController.submitOrder)

module.exports = router

//add colors later :)
// add images of products later :)