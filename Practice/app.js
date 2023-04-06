const navToggler = document.getElementsByClassName("header");
const elem = document.querySelector("span");
let toggler = 0;
elem.addEventListener("click", () => {
  if (toggler === 0) {
    navToggler[0].style.display = "block";
    toggler = 1;
  } else {
    navToggler[0].style.display = "none";
    toggler = 0;
  }
});
