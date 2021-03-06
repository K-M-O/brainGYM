// modules:

const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')

// main get requests:

router.get('/', controller.home)

router.get('/about', controller.about)

//export main router:

module.exports = router