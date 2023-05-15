const headerIconMenu = document.querySelector(".header__iconMenu");
const menuMobileOptions = document.querySelectorAll(
  ".header__divOptionsMenuMobile .header__options"
);
const chekboxMenuMobile = document.querySelector("#header__chekboxMenuMobile");
let heightMenuMobile = 0;
let transitionForOptionMobile = 0.3;

headerIconMenu.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

Array.from(menuMobileOptions).map((option) => {
  heightMenuMobile += option.clientHeight;
  option.style.transition = `all ${transitionForOptionMobile}s ease`;
  transitionForOptionMobile += 0.1;
});

heightMenuMobile += 20;

document.documentElement.style.setProperty(
  "--height-menuMobile",
  `${heightMenuMobile}px`
);

window.addEventListener("resize", () => {
  if (document.body.clientWidth > 568 && chekboxMenuMobile.checked) {
    chekboxMenuMobile.checked = false;
  }
});
