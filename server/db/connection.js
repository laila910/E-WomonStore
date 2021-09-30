const mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectId;
try {
    mongoose.connect(process.env.DataBaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log(`successfully connected`)
    })
} catch (e) {
    console.log('db error =>', e)
}