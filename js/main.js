// import
const { nextPorto, previousPorto, checklengthParagraphPorto } = require("./function");

const leftNav = document.getElementById("nav-porto-left");
const rightNav = document.getElementById("nav-porto-right");

$(document).ready(() => {
  checklengthParagraphPorto();
});

rightNav.addEventListener("click", () => {
  nextPorto();
});

leftNav.addEventListener("click", () => {
  previousPorto();
});

