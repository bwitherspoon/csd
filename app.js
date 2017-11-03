// Composite scrap database application
const path = require('path')
const express = require('express')

const database = require('./routes/database')

const app = express()

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

app.get('/modules', function (req, res) {
  res.render('modules')
})

app.get('/resources', function (req, res) {
  res.render('resources')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(8080)
