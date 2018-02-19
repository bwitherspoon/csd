const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

function authenticate(req, res, next) {
  if (!req.session) {
    res.redirect('/user/login')
  } else if (!req.session.user) {
    req.session.redirect = req.headers['Referer'] || req.originalUrl
    res.redirect('/user/login')
  } else {
    next()
  }
}

router.get('/register', authenticate, (req, res) => {
  res.status(200).end()
})

router.post('/register', authenticate, parser, (req, res) => {
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400).end()
    return
  }
  res.status(500).end()
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', parser, (req, res) => {
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400).end()
    return
  }
  res.status(404)
  res.render('login', {
    error: 'Email or password incorrect'
  })
})

router.all('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        console.error(err.stack)
        res.status(500).end()
      } else {
        res.redirect('/')
      }
    })
  }
})

module.exports = router
