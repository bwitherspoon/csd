// Composite scrap database application
const path = require('path')
const express = require('express')

const database = require('./routes/database')

const app = express()

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || 'localhost'

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

app.listen(port, ip)
