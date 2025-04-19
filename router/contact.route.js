const express = require('express')
const controller = require('../controller/contact.controller')

const router = express.Router()


router.post('/service', controller.handleContact)

module.exports = router