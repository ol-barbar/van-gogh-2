const menuWrapper = document.querySelector(".header-menu-wrapper");
const menuButton = document.querySelector(".main-nav__toggle");


menuButton.addEventListener("click", function (evt) {
    menuWrapper.classList.toggle("header-menu--open");
    menuWrapper.classList.toggle("header-menu--close");
  }
);
