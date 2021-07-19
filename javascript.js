const collapsedClass = "nav--collapsed";

const nav = document.querySelector(".nav");
const button = nav.querySelector(".button");

button.addEventListener("click", () => {
  nav.classList.toggle(collapsedClass);
});
