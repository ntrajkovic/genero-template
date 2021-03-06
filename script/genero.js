// GENERO JavaScript

function openSidebar() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("content-overlay").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("content-overlay").style.display = "none";
}

function toggleAccordion(id) {
  var a = document.getElementById(id);
  if (a.className.indexOf("w3-show") == -1) {
    a.className += " w3-show";
    a.previousElementSibling.className += " w3-light-blue";
  } else {
    a.className = a.className.replace(" w3-show", "");
    a.previousElementSibling.className =
      a.previousElementSibling.className.replace(" w3-light-blue", "");
  }
}
