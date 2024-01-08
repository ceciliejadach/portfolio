const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

var reveals = document.querySelectorAll(".reveal");
var image = document.getElementById("billede");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
}

window.addEventListener("scroll", reveal);

function reveal() {
  console.log("reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function moveImage(event) {
  image.style.display = "block";
  image.style.left = event.clientX + "px";
  image.style.top = event.clientY + "px";
}
