const mongoose = require('mongoose')

const ScrapSchema = mongoose.Schema({
  resin: String,
  reinforcement: String,
  form: String,
  origin_company: String,
  original_material: String,
  manufacturing_method: String,
  current_location: String,
  quantity: Number,
  references: String,
  research_notes: String
})

module.exports = mongoose.model('Scrap', ScrapSchema)
