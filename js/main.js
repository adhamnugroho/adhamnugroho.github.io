// import single
import { nextPorto, previousPorto, checklengthParagraphPorto, generateTahunSekarang, hideUnhideNav, smoothScroll } from "./function.js";

const leftNav = document.getElementById("nav-porto-left");
const rightNav = document.getElementById("nav-porto-right");
const toggler = document.getElementById("toggler");

const intervalSlidePorto = setInterval(() => {
  nextPorto();
}, 6000);

$(document).ready(() => {
  checklengthParagraphPorto();
  generateTahunSekarang();
});

rightNav.addEventListener("click", () => {
  nextPorto();
});

leftNav.addEventListener("click", () => {
  previousPorto();
});

toggler.addEventListener("click", () => {
  hideUnhideNav();
});

$("header nav ul li a").on("click", function (event) {
  smoothScroll(event);
});
