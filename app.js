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

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.get('/education', function (req, res) {
  res.render('education')
})

app.get('/industry', function (req, res) {
  res.render('industry')
})

app.get('/resources', function (req, res) {
  res.render('resources')
})

app.get('/modules', function (req, res) {
  res.render('modules')
})

app.get('/folder', function (req, res) {
  res.render('folder')
})

app.listen(port, function () {
  console.log('Applicaton running on port', port)
})
