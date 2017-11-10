const db = require('../database')

const collection = 'materials'

function Material(doc) {
  name: doc.name ? doc.name : 'Unnamed',
  origin: doc.origin ? doc.origin : 'Unknown',
  method: doc.method ? doc.method : 'Unknown',
  location: doc.location ? doc.location : 'Unknown',
  quantity: {
    value: doc.quantity.value ? doc.quantity.value : 0,
    units: doc.quantity.units ? doc.quantity.units : 'kg'
  },
  notes: doc.notes ? doc.notes : ''
}

Material.find = function (id, callback) {
  // TODO
}

Material.prototype.add = function (callback) {
  // TODO
}

Material.prototype.remove = function (callback) {
  // TODO
}

Material.prototype.update = function (callback) {
  // TODO
}

modules.exports = Material
