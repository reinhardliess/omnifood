# Omnifood – A Website For A Fictional Startup Company

## Description

In this project, while following along with the excellent _Build Responsive Real-World Websites with HTML and CSS_ [Udemy course](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/learn/lecture/27513366#overview), I built a landing page for a fictional startup company called "Omnifood", a boutique food delivery service.

A live version can be accessed [here](https://rliess-omnifood.netlify.app/).

The original website can be found at <https://omnifood.dev>.

## Stuff I added

- Smooth scrolling will only be used if the animation setting is activated on the device/operating system (The `prefers-reduced-motion` media query is evaluated)
- After scrolling using JavaScript the focus is set on the scroll target to establish a correct tab order
- The mobile navigation is truly modal and uses a blur `backdrop-filter` if supported by the browser
- In the `1344px` breakpoint, the numbers of photos in the gallery in the testimonials section is reduced by 2 images to prevent the gallery from being too overpowering
- The call-to-action buttons in the two pricing cards are now always aligned to bottom of the cards, so that they are always on the same vertical level
- In the footer the social media icons have hover effects in brand colors, also added icons to email/phone
