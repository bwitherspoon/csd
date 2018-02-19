const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  folder: [mongoose.Schema.Types.ObjectId],
})

UserSchema.methods.setPassword = function (secret, handler) {
  bcrypt.hash(secret, 14, (error, hash) => {
    if (handler && error)
      return handler(error)
    this.password = hash
  })
}

UserSchema.methods.checkPassword = function (secret, handler) {
  bcrypt.compare(secret, this.password, handler)
}

module.exports = mongoose.model('User', UserSchema)
