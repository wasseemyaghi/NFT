let bars = document.querySelector(".nav-bars");

let divmenu = document.querySelector(".menu");

let iconmenu = document.querySelector(".icon-menu");

bars.addEventListener("click", () => {
  divmenu.classList.add("show");
});

iconmenu.addEventListener("click", () => {
  divmenu.classList.remove("show");
});