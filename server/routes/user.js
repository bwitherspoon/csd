const express = require('express')
const bodyParser = require('body-parser')

const User = require('../models/user')

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
  const usr = new User(req.body.email, req.body.password)
  usr.add(function (err, ok) {
    if (err) {
      console.error(err.stack)
      res.status(500).end()
    } else if (!ok) {
      res.status(400).end()
    } else {
      res.status(200).end()
    }
  })
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', parser, (req, res) => {
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400).end()
    return
  }
  User.find(req.body.email, function (err, usr) {
    if (err) {
      console.error(err.stack)
      res.status(500).end()
    } else if (!usr) {
      console.log("User " + req.body.email + " does not exist")
      res.status(400)
      res.render('login', {
        error: 'Email or password incorrect'
      })
    } else {
      usr.verify(req.body.password, function (err, ok) {
        if (err) {
          console.error(err.stack)
          res.status(500).end()
        } else if (!ok) {
          console.log("User " + usr.id + " failed authentication")
          res.status(400)
          res.render('login', {
            error: 'Email or password incorrect'
          })
        } else {
          console.log("User " + usr.id + " passed authentication")
          req.session.user = usr
          const referer = req.session.redirect || '/'
          delete req.session.redirect
          res.redirect(referer)
        }
      })
    }
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

router.get('/folder', authenticate, (req, res) => {
  res.render('folder', {
    user: req.session.user.id,
    authenticated: true
  })
})

module.exports = router
