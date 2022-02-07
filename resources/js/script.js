"use strict";

/**
 * Waits milliseconds, non-blocking
 * @param {number} milliseconds
 * @returns {Promise}
 */
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Show correct year in copyright footer
function updateCopyrightDate() {
  const copyRightYearEl = document.querySelector(".footer--copyright span");
  copyRightYearEl.textContent = new Date().getFullYear().toString();
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
    element.addEventListener("click", async function (e) {
      const href = element.getAttribute("href");

      e.preventDefault();

      const motionQuery = window.matchMedia("(prefers-reduced-motion)");
      const scrollBehavior = motionQuery.matches ? "auto" : "smooth";

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: scrollBehavior,
        });
        await focusAfterScroll(document.body);
      }

      // disable mobile nav, must be executed before scrollIntoView
      if (element.classList.contains("nav-list-link")) {
        document.body.classList.remove("mobile-nav-open");
      }

      // console.log(scrollBehavior);
      if (motionQuery.matches) {
        await sleep(300);
      }
      if (href.startsWith("#") && href.length > 1) {
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: scrollBehavior });
        await focusAfterScroll(target);
      }

    });
  });
}

/**
 * sets focus to target after scrolling and timeout
 * @param {object} target
 */
async function focusAfterScroll(target) {
  await sleep(1000);
  if (target.getAttribute("tabindex") === null) {
    target.setAttribute("tabindex", "-1");
  }
  target.focus();
}

// manages sticky navigation
function enableStickyNavigation() {
  const heroSectionEl = document.querySelector(".section-hero");

  const observer = new IntersectionObserver(
    function (entries) {
      const entry = entries[0];
      // console.log(entry);
      if (entry.isIntersecting) {
        document.body.classList.remove("sticky");
      } else {
        document.body.classList.add("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      // 8rem size of header
      rootMargin: "-80px",
    }
  );
  observer.observe(heroSectionEl);
}

updateCopyrightDate();
enableMobileNavigation();
enableSmoothScrolling();
enableStickyNavigation();
