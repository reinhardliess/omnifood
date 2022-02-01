"use strict";

// Show correct year in copyright footer
function updateCopyrightDate() {
  const copyRightYearEl = document.querySelector(".footer--copyright span");
  copyRightYearEl.textContent = new Date().getFullYear();
}

updateCopyrightDate();
