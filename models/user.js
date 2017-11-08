const bcrypt = require('bcrypt')

const db = require('../database')

const collection = 'users'

function User(name, secret) {
  this.name = name
  this.secret = secret
}

User.find = function (name, callback) {
  db.get().collection(collection).findOne({
    name: name
  }, function (err, doc) {
    if (doc) {
      const usr = new User(doc.name)
      usr.hash = doc.hash
      callback(err, usr)
    } else {
      callback(err)
    }
  })
}

User.prototype.save = function (callback) {
  const usr = this
  bcrypt.hash(this.secret, 12, function (err, hash) {
    if (err)
      callback(err)
    usr.hash = hash
    db.get().collection(collection).insertOne({
      name: usr.name,
      hash: usr.hash
    }, callback)
  })
}

User.prototype.verify = function (secret, callback) {
  bcrypt.compare(secret, this.hash, callback)
}

module.exports = User
