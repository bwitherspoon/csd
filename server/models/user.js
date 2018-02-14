const assert = require('assert')
const bcrypt = require('bcrypt')

const db = require('../database')

const collection = 'users'

function User(id, secret) {
  this.id = id
  this.secret = secret
}

User.find = function (id, callback) {
  db.get().collection(collection).findOne({
    _id: id
  }, function (err, doc) {
    if (doc) {
      const usr = new User(doc._id)
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
    _id: usr.id
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
          _id: usr.id,
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
