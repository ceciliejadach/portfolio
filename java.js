const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

var image = document.getElementById("billede");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
}

function moveImage(event) {
  image.style.display = "block";
  image.style.left = event.clientX + "px";
  image.style.top = event.clientY + "px";
}
