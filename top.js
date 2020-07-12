function setStorage() {
  var language = document.getElementById("languageSelector").value
  localStorage.setItem('Language', language);
  location.reload();
}
