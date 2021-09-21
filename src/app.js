require("dotenv").config()
require('../db/connection')

const express = require('express')
const cors = require('cors')

const categoryRoutes = require('../routes/category.routes')
const brandRoutes = require('../routes/brand.routes')
const userRoutes = require('../routes/user.routes')

const productRoutes = require('../routes/product.routes')


const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/category', categoryRoutes)
app.use('/brand', brandRoutes)
app.use('/user', userRoutes)

app.use('/product', productRoutes)


module.exports = app