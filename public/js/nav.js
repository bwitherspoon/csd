function activate(target) {
  // FIXME these should not be hardcoded, get them from the parent element
  for (title of ['home', 'about', 'learn', 'search', 'contact']) {
    let elem = document.getElementById('nav-link-' + title)
    if (elem === null) {
      continue
    }
    if (title == target) {
      if (!elem.classList.contains('active')) {
        elem.classList.add('active')
      }
    } else if (elem.classList.contains('active')) {
      elem.classList.remove('active')
    }
  }
}
