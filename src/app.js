require("dotenv").config()
require('../db/connection')

const express = require('express')
const cors = require('cors')
const customerRoutes = require('../routes/customer.routes')
const categoryRoutes = require('../routes/category.routes')
const brandRoutes = require('../routes/brand.routes')
const supplierRoutes = require('../routes/supplier.routes')
const ordershipperRoutes = require('../routes/ordershipper.routes')
const productRoutes = require('../routes/product.routes')
    // const productReviewsRoutes = require('../routes/productreview.routes')

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/customer', customerRoutes)
app.use('/category', categoryRoutes)
app.use('/brand', brandRoutes)
app.use('/supplier', supplierRoutes)
app.use('/ordershipper', ordershipperRoutes)
app.use('/product', productRoutes)
    // app.use('/',productReviewsRoutes)

module.exports = app