function query(elem) {
  var url = window.location.origin + window.location.pathname
  if (!url.endsWith('/')) url = url.concat('/')
  window.location.href = url + elem.value
}
