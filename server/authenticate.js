module.exports = (req, res, next) => {
  const forbidden = () => {
    res.status(403)
    if (req.method === 'GET')
      res.render('login')
    else
      res.send('Forbidden')
  }
  if (!req.session) {
    forbidden()
  } else if (!req.session.user) {
    req.session.redirect = req.headers['Referer'] || req.originalUrl
    forbidden()
  } else {
    next()
  }
}
