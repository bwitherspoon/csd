#!/usr/bin/env node

const mongoose = require('mongoose')
const User = require('../server/models/user')

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/composites'
const name = process.env.NAME || 'admin'
const secret = process.env.SECRET || 'secret'

const error = err => {
  console.error('Error:', err.message)
  process.exit(1)
}

mongoose.connect(uri).then(
  () => {
    const user = new User({ name: name })
    user.hash(secret)
    .then(doc => doc.save())
    .then(doc => process.exit())
    .catch(error)
  },
  error
)
