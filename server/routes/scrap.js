const express = require('express')

const authenticate = require('../authenticate')
const Scrap = require('../models/scrap')

const router = express.Router()
const json = express.json()

router.post('/create', authenticate, json, (req, res) => {
  if (!req.body) res.status(400).send('Bad Request')
  Scrap.create(req.body, (err, doc) => {
    if (err)
      res.status(400).send('Bad Request')
    else
      res.status(200).send('OK')
  })
})

router.post('/search', json, (req, res) => {
  if (!req.body || (!req.body.resin && !req.body.reinforcement && !req.body.form))
    return res.status(400).send('Bad Request')
  const query = Scrap.find()
  if (req.body.resin)
    query.where({ resin: new RegExp(req.body.resin) })
  if (req.body.reinforcement)
    query.where({ reinforcement: new RegExp(req.body.reinforcement) })
  if (req.body.form)
    query.where({ form: new RegExp(req.body.form) })
  query.exec((err, arr) => {
    if (err)
      res.status(400).send('Bad Request')
    else
      res.json(arr)
  })
})

module.exports = router
