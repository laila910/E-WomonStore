const mongoose = require('mongoose')

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