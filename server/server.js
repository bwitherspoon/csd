// Composite scrap database application
const assert = require('assert')
const crypto = require('crypto')
const path = require('path')
const express = require('express')
const session = require('express-session')

const database = require('./database')
const scrap = require('./routes/scrap')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '../public')))

app.use(session({
  secret: crypto.randomBytes(16).toString(),
  resave: false,
  saveUninitialized: false
}))

// Router-level middleware
app.use('/scrap', scrap)

// Application-level middleware
app.get('/', function (req, res) {
  res.render('index', {
    view: 'home',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})
app.get('/about', function (req, res) {
  res.render('about', {
    view: 'about',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})
app.get('/learn', function (req, res) {
  res.redirect('/learn/modules')
})
app.get('/learn/modules', function (req, res) {
  res.render('modules', {
    view: 'learn',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})
app.get('/learn/overview', function (req, res) {
  res.render('overview', {
    view: 'learn',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})
app.get('/contact', function (req, res) {
  res.render('contact', {
    view: 'contact',
    authenticated: Boolean(req.session) && Boolean(req.session.user)
  })
})
app.get('/login', function (req, res) {
  res.status(404).end()
})
app.get('/search', (req, res) => {
  res.render('search', {
    view: 'search',
  })
})
app.get('/admin', (req, res) => {
  res.render('admin')
})

// Error handling
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
})

function handler(opt, err) {
  database.get().close()
  if (err)
    console.error(err.stack())
  if (opt.exit)
    process.exit()
}

database.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/csd', function (err) {
  assert.equal(null, err)

  process.on('exit', handler.bind(null, {
    cleanup: true
  }))
  process.on('SIGINT', handler.bind(null, {
    exit: true
  }))

  app.listen(process.env.PORT || 8080)
})
