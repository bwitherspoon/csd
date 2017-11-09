const express = require('express')
const bodyParser = require('body-parser')

const User = require('../models/user')
const UserController = require('../controllers/usercontroller')

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

router.get('/register', UserController.authenticate, function (req, res) {
  res.status(200).end()
})
router.post('/register', UserController.authenticate, parser, UserController.register)

router.get('/login', function (req, res) {
  res.render('login', {
    failed: false
  })
})
router.post('/login', parser, UserController.login)

router.all('/logout', UserController.logout)

module.exports = router
