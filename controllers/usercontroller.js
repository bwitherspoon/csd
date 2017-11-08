const User = require('../models/user')

module.exports.register = function (req, res) {
  if (!req.body || !req.body.email || !req.body.password) {
    res.status(400).end()
    return
  }
  const usr = new User(req.body.email, req.body.password)
  usr.save(function (err) {
    if (err) {
      console.error(err.stack)
      res.status(500).end()
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
  User.find(req.body.email, function (error, user) {
    if (error) {
      console.error(error.stack)
      res.status(500).end()
    } else if (!user) {
      res.status(404).end()
    } else {
      user.verify(req.body.password, function (err, ok) {
        if (err) {
          console.error(err.stack)
          res.status(500).end()
        } else if (!ok) {
          console.log("User " + user.name + " failed authentication")
          res.status(400).end()
        } else {
          console.log("User " + user.name + " passed authentication")
          res.status(200).end()
        }
      })
    }
  })
}
