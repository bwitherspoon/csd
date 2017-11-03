// Composite scrap database application
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/modules', function (req, res) {
  res.render('modules')
})

app.get('/database', function (req, res) {
  res.render('database')
})

app.get('/resources', function (req, res) {
  res.render('resources')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(8080)
