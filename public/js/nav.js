function activate(target) {
  for (title of ['home', 'about', 'overview', 'modules', 'database', 'contact']) {
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
