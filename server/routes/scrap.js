const express = require('express')

const Scrap = require('../models/scrap')

const router = express.Router()
const json = express.json()

router.post('/create', json, (req, res) => {
  if (!req.body) res.status(400).send('Bad Request')
  Scrap.create(req.body, (err, doc) => {
    if (err)
      res.status(400).send('Bad Request')
    else
      res.status(200).send('OK')
  })
})

router.all('/', (req, res) => {
  res.status(400).send('Bad Request')
})

module.exports = router
