const express = require('express')
const bodyParser = require('body-parser')

const User = require('./models/user')

const authenticate = require('./authenticate')
const scrap = require('./routes/scrap')

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

router.use('/scrap', authenticate, scrap)

router.get('/', (req, res) => {
  res.render('home', {
    view: 'home',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', parser, (req, res) => {
  const reject = () => res.status(400).render('login', {
    error: 'Email and/or password incorrect'
  })
  const error = err => {
    console.error(err)
    res.status(500).send('Internal Server Error')
  }

  if (!req.body || !req.body.email || !req.body.password)
    return res.status(400).send("Bad Request")

  User.findOne({ name: req.body.email }, (err, doc) => {
    if (err)
      return error(err)
    if (!doc)
      return reject()
    doc.auth(req.body.password).then(valid => {
      if (!valid)
        return reject()
      req.session.user = doc
      const referer = req.session.redirect || '/'
      delete req.session.redirect
      res.redirect(referer)
    }).catch(error)
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

router.get('/admin', authenticate, (req, res) => {
  res.render('admin')
})

router.get('/about', (req, res) => {
  res.render('about', {
    view: 'about',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})

router.get('/modules', (req, res) => {
  res.render('modules', {
    view: 'learn',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})

router.get('/overview', (req, res) => {
  res.render('overview', {
    view: 'learn',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})

router.get('/contact', (req, res) => {
  res.render('contact', {
    view: 'contact',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})

router.get('/search', (req, res) => {
  res.render('search', {
    view: 'search',
  })
})

module.exports = router
