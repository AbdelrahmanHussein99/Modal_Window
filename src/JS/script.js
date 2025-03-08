"use strict";
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showModalsBtns = document.querySelectorAll(".show-modal");
console.log(showModalsBtns);
const closeOpenToggle = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
for (let i = 0; i < showModalsBtns.length; i++)
  showModalsBtns[i].addEventListener("click", closeOpenToggle);

closeModalBtn.addEventListener("click", closeOpenToggle);
overlay.addEventListener("click", closeOpenToggle);
document.body.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeOpenToggle();
  }
  e.preventDefault();
});
