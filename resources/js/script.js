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

// Implement smooth scrolling for all local links
function enableSmoothScrolling() {
  const allLinks = document.querySelectorAll("a:link");
  const bodyEl = document.querySelector("body");

  allLinks.forEach(function (element) {
    element.addEventListener("click", function (e) {
      const el = e.currentTarget;
      const href = el.getAttribute("href");

      e.preventDefault();

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      if (href.startsWith("#") && href.length > 1) {
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }

      // disable mobile nav
      if (el.classList.contains("nav-list-link")) {
        bodyEl.classList.remove("mobile-nav-open");
      }
    });
  });
}

updateCopyrightDate();
enableMobileNavigation();
enableSmoothScrolling();
