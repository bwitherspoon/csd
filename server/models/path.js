const mongoose = require('mongoose')

const PathSchema = mongoose.Schema({
  label: {
    type: String,
    trim: true,
    required: true,
  },
  short: {
    type: String,
    trim: true,
  },
  value: {
    type: String,
    trim: true,
    index: true,
    unique: true,
    required: true,
  },
})

module.exports = mongoose.model('Path', PathSchema)
