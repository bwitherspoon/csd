// Composite scrap database application
const path = require('path')
const express = require('express')

const database = require('./routes/database')

const port = process.env.PORT || 8080

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

// Router-level middleware
app.use('/database', database)

// Application-level middleware
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/overview', function (req, res) {
  res.render('overview')
})

app.get('/resources', function (req, res) {
  res.render('resources')
})

app.get('/modules', function (req, res) {
  res.render('modules')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(port, function () {
  console.log('Applicaton running on port', port)
})
