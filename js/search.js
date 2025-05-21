const userSearch = document.querySelector(".user-menu__search");
const userSearchToggle = document.querySelector(".user-menu__search-close-toggle");
const userSearchButton = document.querySelector(".user-menu__search-button");
const userSearchOpen = document.querySelector(".user-menu__search--open");
const userSearchForm = document.querySelector(".user-menu__search-form");

userSearchButton.addEventListener("click", function (evt) {
  if (!userSearchOpen) {
    evt.preventDefault();
    userSearch.classList.toggle("user-menu__search--open");
    userSearchButton.addEventListener("click", function (evt) {
      userSearchForm.submit();
    })
  }
  }
);

userSearchToggle.addEventListener("click", function (evt) {
  userSearch.classList.toggle("user-menu__search--open");
  }
);
