const express = require('express')

const router = express.Router()

router.all('/', (req, res) => {
  if (req.session && req.session.user)
    res.status(200).send("OK")
  else
    res.status(403).send("Forbidden")
})

module.exports = router
