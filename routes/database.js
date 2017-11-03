// Database routes
const express = require('express')
const router = express.Router()

router.get('/*', function (req, res) {
  res.render('database', {
    path: req.path
  })
})

module.exports = router
