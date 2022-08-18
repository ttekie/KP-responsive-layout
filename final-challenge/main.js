const button = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");

button.addEventListener("click", () => {
   nav.classList.toggle("nav--visible");
});