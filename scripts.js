function fboton() {
  window.open("https://www.youtube.com/watch?v=PZ3MLRh7wvg");
}
function bboton() {
  window.open("https://www.youtube.com/watch?v=9ELINw1aJTM");
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
