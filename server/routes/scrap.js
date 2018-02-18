const express = require('express')
const router = express.Router()
const json = express.json()

router.get('/', (req, res) => {
  res.status(200).end()
})

router.post('/', json, (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

module.exports = router
