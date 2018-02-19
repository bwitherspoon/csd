const express = require('express')

const router = express.Router()

router.all('/', (req, res) => {
  res.status(400).send("Bad Request")
})

module.exports = router
