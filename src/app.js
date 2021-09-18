require("dotenv").config()
require('../db/connection')

const express = require('express')
const customerRoutes = require('../routes/customer.routes')
const categoryRoutes = require('../routes/category.routes')
const brandRoutes = require('../routes/brand.routes')
const supplierRoutes = require('../routes/supplier.routes')
const ordershipperRoutes = require('../routes/ordershipper.routes')
const productRoutes = require('../routes/product.routes')
const productReviewsRoutes = require('../routes/productreview.routes')

const app = express()



app.use(express.json())
app.use(customerRoutes)
app.use(categoryRoutes)
app.use(brandRoutes)
app.use(supplierRoutes)
app.use(ordershipperRoutes)
app.use(productRoutes)
app.use(productReviewsRoutes)

module.exports = app