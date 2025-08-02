// Navbar Color Active Change Start
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    const isHome =
      (linkPath === "/home.html" && currentPath === "/") ||
      linkPath === currentPath;

    if (isHome) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
// Navbar Color Active Change End

// navbar scroll start
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const languageDropdown = document.querySelector(".dropdown-toggle");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");

    navbarLinks.forEach((link) => {
      link.style.color = "white";
    });

    if (languageDropdown) {
      languageDropdown.style.color = "white";
    }
  } else {
    navbar.classList.remove("scrolled");

    navbarLinks.forEach((link) => {
      link.style.color = "black";
    });

    if (languageDropdown) {
      languageDropdown.style.color = "#195f90";
    }
  }
});
// navbar scroll end

// navbar responsive color change start
const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
  if (navbarCollapse.classList.contains("show")) {
    navbar.classList.remove("show-background");
  } else {
    navbar.classList.add("show-background");
  }
});

// navbar responsive color change end

// Video Background play/pause Button Start
const video = document.getElementById("heroVideo");
const playBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");

window.addEventListener("load", () => {
  video.currentTime = 0.01;
});

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.classList.remove("bi-play-fill");
    playIcon.classList.add("bi-pause-fill");
  } else {
    video.pause();
    playIcon.classList.remove("bi-pause-fill");
    playIcon.classList.add("bi-play-fill");
  }
});
// Video Background play/pause Button End
