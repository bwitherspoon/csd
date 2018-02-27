const express = require('express')
const bodyParser = require('body-parser')

const User = require('./models/user')

const path = require('./routes/path')
const user = require('./routes/user')
const scrap = require('./routes/scrap')
const image = require('./routes/image')

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

router.use('/path', path)
router.use('/user', user)
router.use('/scrap', scrap)
router.use('/image', image)

router.get('/', (req, res) => {
  res.render('index')
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

module.exports = router
