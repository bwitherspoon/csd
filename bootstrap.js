const assert = require('assert')

const User = require('./models/user')
const db = require('./database')

db.connect(process.env.MONGODB_URI, function (err) {
  const user = new User(process.env.CSD_USERNAME, process.env.CSD_PASSWORD)
  user.add(function (err) {
    if (err) {
      console.error(err.stack)
      process.exit(1)
    } else {
      process.exit()
    }
  })
})
