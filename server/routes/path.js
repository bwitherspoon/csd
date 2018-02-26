const express = require('express')

const Path = require('../models/path')

const router = express.Router()

router.get('/:path', (req, res) => {
  const re = new RegExp(req.params.path + '[^,]*,?$')
  Path.find({ value: re }, '-_id label short value', (err, doc) => {
    if (err)
      res.status(500).send("Internal Server Error")
    else
      res.json(doc)
  })
})

module.exports = router
