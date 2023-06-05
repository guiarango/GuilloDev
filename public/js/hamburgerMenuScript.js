let menuBtn = document.querySelector("#menuBtn");
let menu = document.querySelector("#menu");
let sideNav = document.querySelector(".sideNav");

menuBtn.addEventListener("click", () => {
  if (sideNav.style.right == "-250px" || sideNav.style.right == "") {
    sideNav.style.right = "0";
    menu.src = "/images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "/images/hamburgerMenu.png";
  }
});
