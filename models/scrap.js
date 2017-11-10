const db = require('../database')

const collection = 'scrap'

function Scrap(obj) {
  for (const key of Object.keys(obj))
    if (obj[key]) this[key] = obj[key]
}

Scrap.prototype.add = function (callback) {
  db.get().collection(collection).insertOne(this, function (err, res) {
    callback(err, res.insertedCount)
  })
}

module.exports = Scrap
