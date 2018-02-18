const mongoose = require('mongoose')

const ScrapSchema = mongoose.Schema({
  path: String,
  manufacturing: String,
  origin: String,
  location: String,
  quantity: Number,
  notes: String
})

module.exports = mongoose.model('Scrap', MaterialSchema)
