// Composite scrap database application
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(8080)
