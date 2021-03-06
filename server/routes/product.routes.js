const router = require('express').Router()
const uploadbrandImage = require('../middlewar/imagebrandUpload')
const uploadProductImages = require('../middlewar/productImagesUpload')
const auth = require('../middlewar/auth')
const productController = require('../controller/product.controller')
    //add Product-> tested :)
router.post('/addProduct', auth, productController.addProduct)
    //add category ->tested :)
router.post('/addCat/:id', auth, productController.addCategory)
    //add brands ->tested:)
router.post('/addBrand/:id', auth, uploadbrandImage.single('brandImage'), productController.addBrand)
    //show all products for all users :)
router.get('/allProduct', productController.allProducts)
    //single product :) for all users 
router.get('/allProduct/:id', productController.singleProduct)


//add sizes :)
router.post('/addSizes/:id', auth, productController.addSizes)
    //  edit product :)
router.patch('/editProduct/:id', auth, productController.editProduct)
    // add colors by supplier :)
router.post('/addColors/:id', auth, productController.addColors)
    //add product images by supplier :)
router.post('/addPImages/:id', auth, uploadProductImages.single('productImage'), productController.addPImages)
    //add reviews by customer :) 

router.post('/addReview/:id', auth, productController.addReview)

//add To card BY customer :) 
router.post('/addedTocard/:id', auth, productController.addToCard)
    //delete product by supplier  :)
router.delete('/allProduct/:id', auth, productController.deleteProduct)

module.exports = router