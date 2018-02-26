const mongoose = require('mongoose')

const PathSchema = mongoose.Schema({
  label: String,
  short: String,
  value: String,
})

module.exports = mongoose.model('Path', PathSchema)
