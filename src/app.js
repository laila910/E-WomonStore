require("dotenv").config()
require('../db/connection')

const express = require('express')
const customerRoutes = require('../routes/customer.routes')
const categoryRoutes = require('../routes/category.routes')

const app = express()



app.use(express.json())
app.use(customerRoutes)
app.use(categoryRoutes)

module.exports = app