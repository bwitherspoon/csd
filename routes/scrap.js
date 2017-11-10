const express = require('express')
const bodyParser = require('body-parser')

const Scrap = require('../models/scrap')
const authenticate = require('../controllers/usercontroller').authenticate

const router = express.Router()
const parser = bodyParser.urlencoded({
  extended: false
})

router.get('/', authenticate, function (req, res) {
  res.render('scrap', {
    view: 'scrap',
    authenticated: true,
    reinforcements: {
      glassfiber: 'Glass Fiber',
      carbonfiber: 'Carbon Fiber',
      kevlarfiber: 'Kevlar Fiber'
    },
    resins: {
      nylon6: 'Nylon-6',
      epoxy: 'Epoxy',
      vinylester: 'Vinyl Ester'
    },
    forms: {
      bulk: 'Bulk',
      choptape: 'Chopped Tape',
      trimoff: 'Trim Offs'
    },
    methods: {
      pultrusion: 'Pultrusion'
    },
    origins: {
      hardin: 'Hardin Composites'
    },
    locations: {
      uab: 'University of Alabama at Birmingham (UAB)'
    }
  })
})
router.post('/', authenticate, parser, function (req, res) {
  const scrap = new Scrap(req.body)
  if (Object.keys(scrap).length == 0)
    return res.status(400).send('Failure')
  scrap.add(function (err, cnt) {
    if (err) {
      console.error(err.stack)
      res.status(500).end()
    } else if (!cnt) {
      res.status(400).send('Failure')
    } else {
      res.status(200).send('Success')
    }
  })
})

module.exports = router
