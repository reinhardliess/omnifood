"use strict";

// Show correct year in copyright footer
function updateCopyrightDate() {
  const copyRightYearEl = document.querySelector(".footer--copyright span");
  copyRightYearEl.textContent = new Date().getFullYear();
}

// make mobile navigation work
function enableMobileNavigation() {
  const bodyEl = document.querySelector("body");
  const btnMobileNavEl = document.querySelector(".header--mobile-btn-nav");

  btnMobileNavEl.addEventListener("click", function () {
    bodyEl.classList.toggle("mobile-nav-open");
  });
}
updateCopyrightDate();
enableMobileNavigation();
