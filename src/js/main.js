// import list
import { nextPorto, previousPorto, checklengthParagraphPorto, generateTahunSekarang, hideUnhideNav, smoothScroll, expandViewPortoList, changeSizeHumbergerMenu } from "./function.js";
import { style } from "./../css/style.css";
import { flip_card } from "./../css/flip-card.css";
import { not_copy } from "./../css/not_copy.css";

const lebarLayar = $(window).width();

const leftNav = document.getElementById("nav-porto-left");
const rightNav = document.getElementById("nav-porto-right");
const toggler = document.getElementById("toggler");

$(document).ready(() => {
  checklengthParagraphPorto();
  generateTahunSekarang();
});

if (lebarLayar >= 768) {
  const intervalSlidePorto = setInterval(() => {
    nextPorto();
  }, 6000);
}

if (lebarLayar > 350 && lebarLayar <= 768) {
  $("#expand-porto-btn").on("click", () => {
    expandViewPortoList();
  });
}

if (lebarLayar <= 350) {
  changeSizeHumbergerMenu();
  $("#expand-porto-btn").on("click", () => {
    expandViewPortoList();
  });
}

rightNav.addEventListener("click", () => {
  nextPorto();
});

leftNav.addEventListener("click", () => {
  previousPorto();
});

toggler.addEventListener("click", () => {
  hideUnhideNav();
});

$("header a").on("click", function (e) {
  smoothScroll(this, e);
});
