const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.DataBaseURL)
} catch (e) {
    console.log('db error =>', e)
}