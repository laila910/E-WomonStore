const router = require('express').Router()
const categoryController = require('../controller/category.controller')
const category = require('../models/category.model')

router.post('/addCategory', async(req, res) => {
    try {
        const myData = new category(req.body)
        await myData.save()
        res.send(myData)
    } catch (e) {
        res.send(e)
    }
})
router.get('/allCategory', async(req, res) => {
    try {
        const data = await category.find()
        if (!data) res.send('Not Found Any Category')
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})
router.get('/allCategory/:id', async(req, res) => {
    try {
        const singleCategory = await category.findById(req.params.id)
        if (!singleCategory) res.send('category not found')
        res.send(singleCategory)

    } catch (e) {
        res.send(e)
    }
})
router.delete('/allCategory/:id', async(req, res) => {
    try {
        const deletedData = await category.findByIdAndDelete(req.params.id)
        if (!deletedData) res.send('category not found')
        res.send('Done,Category Deleted')
    } catch (e) {
        res.send(e)
    }
})

router.patch('/allCategory/:id', async(req, res) => {
    availableUpdates = ["catName", "catDescription", "catStatus"]
    requested = Object.keys(req.body)
    isValidForUpdates = requested.every(c => availableUpdates.includes(c))
    if (!isValidForUpdates) res.send("updates unavailable ")
    try {
        const updatedData = await category.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        if (!updatedData) res.send('category not Found that you want to update')
        res.send('updates Done')
    } catch (e) {
        res.send(e)
    }
})

module.exports = router