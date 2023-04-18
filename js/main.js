// import single
import { nextPorto, previousPorto, checklengthParagraphPorto, generateTahunSekarang } from "./function.js";

const leftNav = document.getElementById("nav-porto-left");
const rightNav = document.getElementById("nav-porto-right");

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
