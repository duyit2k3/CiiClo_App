const navbarMenu = document.getElementById("nav");
const burgerMenu = document.getElementById("burger");
const ellipse = document.getElementById("header-ellipse");

// open close navbar on click burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// close navbar on click header-nav__link
document.querySelectorAll(".header-nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

//hidden ellipse in header when it change pos
if (ellipse) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      ellipse.style.opacity = "0";
    } else {
      ellipse.style.opacity = "0.15";
    }
  });
}


