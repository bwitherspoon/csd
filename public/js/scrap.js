function toggle(name) {
  const checkbox = document.getElementById('checkbox-' + name)
  const select = document.getElementById('select-' + name)
  select.disabled = !checkbox.checked
}
