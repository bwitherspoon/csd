const MongoClient = require('mongodb').MongoClient

var instance

module.exports = {
  connect: function (uri, cb) {
    MongoClient.connect(uri, function (err, db) {
      instance = db
      return cb(err)
    })
  },
  get: function () {
    if (!instance) {
      throw new Error("Database not connected")
    }
    return instance
  }
}
