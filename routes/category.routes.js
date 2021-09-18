const router = require('express').Router()
const categoryController = require('../controller/category.controller')
const category = require('../models/category.model')

router.post('/addCategory', (req, res) => {
    const myDate = new category({ catName: "Bags" })
    myDate.save().then(() => res.send(myDate))
        .catch(e => res.send(e))
})


module.exports = router