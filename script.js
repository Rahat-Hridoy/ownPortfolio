// menu toggler
let bar = document.querySelectorAll("#bar");
let menu = document.getElementById("menu");
let isVisible = false;

function toggle() {
  bar[0].classList.toggle("rotate-45");
  bar[0].classList.toggle("translate-y-[10px]");
  bar[1].classList.toggle("opacity-0");
  bar[2].classList.toggle("-rotate-45");
  bar[2].classList.toggle("-translate-y-[8px]");

  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");

  isVisible = !isVisible;
}
