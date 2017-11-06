function search() {
  var elem = document.getElementById('select-search')
  var url = window.location.origin + window.location.pathname
  if (!url.endsWith('/')) url = url.concat('/')
  window.location.href = url + elem.value
}
