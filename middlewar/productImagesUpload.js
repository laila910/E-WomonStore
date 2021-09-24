const multer = require('multer')
const path = require('path')
fs = require('fs')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const location = path.join('productimages', Date.now().random(1, 100))
        fs.mkdir(location, (err) => {})
        cb(null, location)

    },
    filename: function(req, file, cb) {
        const myFileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        cb(null, myFileName)
    }
})
const upload = multer({
    storage: storage,
    limits: ({ fileSize: 2000000000000000000000000000000000000000000000000000000 })

})
module.exports = upload