// Composite scrap database application
const path = require('path')
const express = require('express')

const search = require('./routes/search')

const port = process.env.PORT || 8080

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

// Router-level middleware
app.use('/search', search)

// Application-level middleware
app.get('/', function (req, res) {
  res.render('index')
})
app.get('/about', function (req, res) {
  res.render('about')
})
app.get('/learn', function (req, res) {
  res.redirect('/learn/modules')
})
app.get('/learn/modules', function (req, res) {
  res.render('modules')
})
app.get('/learn/overview', function (req, res) {
  res.render('overview')
})
app.get('/contact', function (req, res) {
  res.render('contact')
})

// Error handling
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
})

app.listen(port, function () {
  console.log('Applicaton running on port', port)
})
