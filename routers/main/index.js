const express = require('express')
const router = express.Router()
const controller = require('./main.controller.js')
const path = require('path')

const multer = require('multer')
const upload = multer({
    storage: multer.memoryStorage(
            // {
            // destination: function (req, file, callback) {
            //     callback(null, './uploads/')
            // },
            // filename: function (req, file, callback) {
            //     callback(null, new Date().valueOf() + path.extname(file.originalname))
            // },
            // onError: function (err, next) {
            //     console.log('error', err)
            // }
        // }
    ),
})

router.get('/', controller.main)
router.post('/file', 
upload.single('file'),
 controller.fileTransfer)

module.exports = router