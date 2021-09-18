const router = require('express').Router()
const brandController = require('../controller/brand.controller')
const brand = require('../models/brand.model')

router.post('/addBrand', async(req, res) => {
    try {
        const brandData = new brand(req.body)
        await brandData.save()
        res.send(brandData)

    } catch (e) {
        res.send(e)
    }
})

router.get('/allBrand', async(req, res) => {
    try {
        const allbrandData = await brand.find()
        res.send(allbrandData)
    } catch (e) {
        res.send(e)
    }
})

router.get('/allBrand/:id', async(req, res) => {
    try {
        const singleBrandData = await brand.findById(req.params.id)
        if (!singleBrandData) res.semd('this brand is not found')
        res.send(singleBrandData)
    } catch (e) {
        res.send(e)
    }
})
router.delete('/allBrand/:id', async(req, res) => {
    try {
        const deletedData = await brand.findByIdAndDelete(req.params.id)
        if (!deletedData) res.send('brand Not Found ')
        res.send('Done,Brand Deleted')

    } catch (e) {
        res.send(e)

    }
})
router.patch('/allBrand/:id', async(req, res) => {
    availableUpdates = ["brandName", "brandDescription", "brandImage"]
    requested = Object.keys(req.body)
    isValid = requested.every(b => availableUpdates.includes(b))
    if (!isValid) res.send('Updates unavailable')
    try {
        const updatedData = await brand.findByIdAndUpdate(req.params.id, req.body, { runValidatord: true })
        if (!updatedData) res.send('updates unavaliable')
        res.send('updates Done')
    } catch (e) {
        res.send(e)
    }
})
module.exports = router