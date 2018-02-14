const Scrap = require('../models/scrap')

module.exports.search = {
  get: function (req, res) {
    res.render('search', Object.assign({
      view: 'search'
    }, Scrap.options))
  },
  post: function (req, res) {
    Scrap.find(req.body, function (error, results) {
      if (error) {
        console.error(error.stack)
        res.status(500).end()
      } else {
        res.render('search', Object.assign({
          view: 'search',
          results: results
        }, Scrap.options))
      }
    })
  }
}

module.exports.submit = {
  get: function (req, res) {
    res.render('submit', Object.assign({
      view: 'submit',
      authenticated: true
    }, Scrap.options))
  },
  post: function (req, res) {
    const scrap = new Scrap(req.body)
    const args = Object.assign({
      view: 'submit',
      authenticated: true
    }, Scrap.options)
    if (Object.keys(scrap).length == 0) {
      args.error = 'Failure! Refusing an empty document'
      res.status(400).render('submit', args)
    } else {
      scrap.add(function (err, cnt) {
        if (err) {
          console.error(err.stack)
          res.status(500).end()
        } else if (!cnt) {
          args.error = 'Failure! Unable to insert document'
          res.status(400).render('submit', args)
        } else {
          args.success = true
          res.render('submit', args)
        }
      })
    }
  }
}
