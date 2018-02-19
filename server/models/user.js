const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
    index: true,
    unique: true,
    required: true,
  },
  _hash: {
    type: String,
    required: true,
  },
  data: [mongoose.Schema.Types.ObjectId],
})

UserSchema.post('save', function (err, doc, next) {
  if (err.name === 'MongoError' && err.code === 11000) {
    next(new Error('User already exists'))
  } else {
    next(err)
  }
})

UserSchema.post('update', function (err, doc, next) {
  if (err.name === 'MongoError' && err.code === 11000) {
    next(new Error('User already exists'))
  } else {
    next(err)
  }
})

UserSchema.methods.hash = function (secret) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(secret, 12, (err, res) => {
      if (err) reject(new Error('Failed to hash password'))
      this._hash = res
      resolve(this)
    })
  })
}

UserSchema.methods.auth = function (secret) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(secret, this._hash, (err, res) => {
      if (err) reject(new Error('Failed to compare password'))
      resolve(res)
    })
  })
}

module.exports = mongoose.model('User', UserSchema)
