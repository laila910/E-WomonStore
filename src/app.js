require("dotenv").config()
require('../db/connection')

const express = require('express')
const cors = require('cors')


const userRoutes = require('../routes/user.routes')

const productRoutes = require('../routes/product.routes')


const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.use('/user', userRoutes)

app.use('/product', productRoutes)


module.exports = app