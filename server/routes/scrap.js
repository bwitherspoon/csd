const express = require('express')
const router = express.Router()
const json = express.json()

const Scrap = require('../models/scrap')

router.get('/', (req, res) => {
  res.status(200).end()
})

router.post('/', json, (req, res) => {
  Scrap.create(req.body, (err, doc) => {
    if (err)
      res.status(400).end()
    else
      res.status(200).end()
  })
})

module.exports = router
