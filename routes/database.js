// Database routes
const express = require('express')
const router = express.Router()

router.get('/*', function (req, res) {
  res.render('database', {
    path: req.path.slice(1).split('/')
  })
})

module.exports = router
