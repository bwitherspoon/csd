const express = require('express')
const bodyParser = require('body-parser')

const User = require('../models/user')
const UserController = require('../controllers/usercontroller')

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

//router.post('/register', parser, UserController.register)
router.post('/login', parser, UserController.login)

module.exports = router
