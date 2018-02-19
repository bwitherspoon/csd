const crypto = require('crypto')
const path = require('path')
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')

const router = require('./routes')

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/composites'
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '../public')))

app.use(session({
  secret: crypto.randomBytes(16).toString(),
  resave: false,
  saveUninitialized: false
}))

app.use('/', router)

// Error handling
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
})

function handler(opt, err) {
  if (err)
    console.error(err.stack())
  if (opt.exit)
    process.exit()
}

// Serve
mongoose.connect(uri).then(
  () => {
    process.on('exit', handler.bind(null, {
      cleanup: true
    }))
    process.on('SIGINT', handler.bind(null, {
      exit: true
    }))
    app.listen(process.env.PORT || 8080)
  },
  err => {
    console.error(err.stack())
    process.exit(1)
  }
)
