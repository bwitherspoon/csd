const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
  name: String,
  type: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  }
})

module.exports = mongoose.model('Image', ImageSchema)
