const router = require('express').Router()
const { isValidObjectId } = require('mongoose')
const productreviewController = require('../controller/productreview.controller')
const review = require('../models/productReviews.model')

router.post('/addReview', async(req, res) => {
    try {
        const addreview = new review(req.body)
        await addreview.save()
        res.send(addreview)
    } catch (e) {
        res.send(e)

    }
})

router.get('/allReview', async(req, res) => {
    try {
        const alldata = await review.find()
        if (!alldata) res.send('Not Found Any Reviews')
        res.send(alldata)
    } catch (e) {
        res.send(e)

    }
})
router.get('/allReview/:id', async(req, res) => {
    try {
        const singleReview = await review.findById(req.params.id)
        if (!singleReview) res.send('Review Not Found')
        res.send(singleReview)
    } catch (e) {
        res.send(e)
    }
})

router.delete('/allReview/:id', async(req, res) => {
    try {
        const deleteReview = await review.findByIdAndDelete(req.params.id)
        if (!deleteReview) res.send('review not found')
        res.send('Done,Review Deleted')
    } catch (e) {
        res.send(e)
    }
})
router.patch('/allReview/:id', async(req, res) => {
    availableUpdates = ["reviewerName", "reviewerEmail", "reviewerComment", "reviewMadeDate"]
    requested = Object.keys(req.body)
    isValid = requested.every(r => availableUpdates.includes(r))
    if (!isValid) res.send('unavailable updates')
    try {
        const updatedReview = await review.findByIdAndUpdate(req.params.id, req.body, { runValidator: true })
        if (!updatedReview) res.send('unavailable updates')
        res.send('Done, Review updated ')
    } catch (e) {
        res.send(e)
    }
})

module.exports = router