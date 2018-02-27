const express = require('express')
const fileupload = require('express-fileupload')

const authenticate = require('../authenticate')
const Image = require('../models/image')

const router = express.Router()

router.get('/:id', (req, res) => {
  Image.findOne({ _id: req.params.id }, (err, img) => {
    if (err) return res.status(500).send("Internal Server Error")
    if (!img) return res.status(404).send("Resource Not Found")
    res.type(img.type).send(img.data)
  })
})

router.post('/', fileupload(), (req, res) => {
  if (!req.files || !req.files.images)
    return res.status(400).send("Invalid Request")
  const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images]
  Image.create(files.map(file => { return {
    name: file.name,
    type: file.mimetype,
    data: file.data,
  }}),
  (err, arr) => {
    if (err) return res.status(500).send('Internal Server Error')
    res.json(arr)
  })
})

module.exports = router
