require("dotenv").config()
require('../db/connection')
const express = require('express')
const app = express()



app.use(express.json())
app.get('/test', (req, res) => {
    res.send('test')
})
module.exports = app