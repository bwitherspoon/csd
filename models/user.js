const assert = require('assert')
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

User.prototype.add = function (callback) {
  const usr = this
  const col = db.get().collection(collection)
  col.count({
    name: usr.name
  }, function (err, cnt) {
    if (err) {
      callback(err)
    } else if (cnt) {
      callback(null, false)
    } else {
      bcrypt.hash(usr.secret, 12, function (err, hash) {
        if (err)
          callback(err)
        usr.hash = hash
        col.insertOne({
          name: usr.name,
          hash: usr.hash
        }, function (err, res) {
          if (err)
            callback(err)
          assert.equal(1, res.insertedCount)
          callback(null, true)
        })
      })
    }
  })
}

User.prototype.verify = function (secret, callback) {
  bcrypt.compare(secret, this.hash, callback)
}

module.exports = User
