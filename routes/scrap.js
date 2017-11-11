const express = require('express')
const bodyParser = require('body-parser')

const ScrapController = require('../controllers/scrapcontroller')
const authenticate = require('../controllers/usercontroller').authenticate

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

router.get('/', authenticate, ScrapController.submit.get)
router.post('/', authenticate, parser, ScrapController.submit.post)

module.exports = router
