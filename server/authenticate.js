module.exports = (req, res, next) => {
  if (!req.session) {
    res.redirect('/login')
  } else if (!req.session.user) {
    req.session.redirect = req.headers['Referer'] || req.originalUrl
    res.redirect('/login')
  } else {
    next()
  }
}
