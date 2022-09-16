const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li a");
console.log(sections);

window.onscroll = () => {
  var current = "";

  sections.forEach((section, i) => {
    const sectionTop = section.offsetTop;
    if (i === sections.length - 1 && scrollY >= 2500) {
      current = section.getAttribute("id");
    }
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

jQuery(function ($) {
  "use strict";
  (function () {
    $("#preloader").delay(200).fadeOut("slow");
  })();
});
