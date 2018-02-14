const express = require('express')
const bodyParser = require('body-parser')

const ScrapController = require('../controllers/scrapcontroller')
const authenticate = require('../controllers/usercontroller').authenticate

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

router.get('/search', ScrapController.search.get)
router.post('/search', parser, ScrapController.search.post)
router.get('/submit', authenticate, ScrapController.submit.get)
router.post('/submit', authenticate, parser, ScrapController.submit.post)

module.exports = router
