// Database routes
const express = require('express')
const router = express.Router()

const lookup = {
  'thermoplastic-scrap': ['Reinforcement', 'Resin Type', 'Form'],
  'reinforcement': ['Glass Fiber', 'Carbon Fiber', 'Kevlar Fiber', 'Fillers'],
  'glass-fiber': ['PA6', 'PA66', 'Epoxy', 'Vinyl Ester'],
  'pa6': ['Bulk', 'Chopped Tape', 'Trim Offs'],
  'chopped-tape': null
}

router.get('/', function (req, res) {
  var options = ['Resin', 'Fiber', 'Thermoset Scrap', 'Thermoplastic Scrap']
  res.render('search', {
    view: 'search',
    options: options
  })
})

router.get('/*', function (req, res) {
  var paths = req.path.split('/')
  var query = paths[paths.length - 1]
  var options = []
  if (lookup.hasOwnProperty(query)) {
    options = lookup[query]
  }
  res.render('search', {
    options: options
  })
})

module.exports = router
