"use strict";

// Show correct year in copyright footer
function updateCopyrightDate() {
  const copyRightYearEl = document.querySelector(".footer--copyright span");
  copyRightYearEl.textContent = new Date().getFullYear();
}

// make mobile navigation work
function enableMobileNavigation() {
  const btnMobileNavEl = document.querySelector(".header--mobile-btn-nav");

  btnMobileNavEl.addEventListener("click", function () {
    document.body.classList.toggle("mobile-nav-open");
  });
}

// Implement smooth scrolling for all local links
function enableSmoothScrolling() {
  const allLinks = document.querySelectorAll("a:link");

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
        document.body.classList.remove("mobile-nav-open");
      }
    });
  });
}

function enableStickyNavigation() {
  const heroSectionEl = document.querySelector(".section-hero");

  const observer = new IntersectionObserver(function (entries) {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky")
    } else {
      document.body.classList.add("sticky")
    }
  }, {
    root: null,
    threshold: 0,
    // 8rem size of header
    rootMargin: "-80px"
  });
  observer.observe(heroSectionEl);
}

updateCopyrightDate();
enableMobileNavigation();
enableSmoothScrolling();
enableStickyNavigation();
