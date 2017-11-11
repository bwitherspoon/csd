const User = require('../models/user')

module.exports.register = function (req, res) {
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400).end()
    return
  }
  const usr = new User(req.body.email, req.body.password)
  usr.add(function (err, ok) {
    if (err) {
      console.error(err.stack)
      res.status(500).end()
    } else if (!ok) {
      res.status(400).end()
    } else {
      res.status(200).end()
    }
  })
}

module.exports.login = function (req, res) {
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400).end()
    return
  }
  User.find(req.body.email, function (err, usr) {
    if (err) {
      console.error(err.stack)
      res.status(500).end()
    } else if (!usr) {
      console.log("User " + req.body.email + " does not exist")
      res.status(400)
      res.render('login', {
        error: 'Email or password incorrect'
      })
    } else {
      usr.verify(req.body.password, function (err, ok) {
        if (err) {
          console.error(err.stack)
          res.status(500).end()
        } else if (!ok) {
          console.log("User " + usr.id + " failed authentication")
          res.status(400)
          res.render('login', {
            error: 'Email or password incorrect'
          })
        } else {
          console.log("User " + usr.id + " passed authentication")
          req.session.user = usr
          res.redirect('/')
        }
      })
    }
  })
}

module.exports.logout = function (req, res) {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        console.error(err.stack)
        res.status(500).end()
      } else {
        res.redirect('/')
      }
    })
  }
}

module.exports.folder = function (req, res) {
  res.render('folder', {
    user: req.session.user.id,
    authenticated: true
  })
}

module.exports.authenticate = function (req, res, next) {
  if (!req.session || !req.session.user) {
    res.redirect('/user/login')
  } else {
    return next()
  }
}
