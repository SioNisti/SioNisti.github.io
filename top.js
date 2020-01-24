function setStorage() {
  var language = document.getElementById("languageSelector").value
  localStorage.setItem('Language', language);
  location.reload();
}

window.onload = function() {
  window.open("https://siontea.com/construction.html","_self");
};