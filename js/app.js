const checkbox = document.querySelector("#checkbox");
console.log(window.matchMedia("prefers-color-scheme: dark".matches));

if (window.matchMedia("prefers-color-scheme: dark").matches) {
  checkbox.setAttribute("checked", true);
  console.log("rerer");
}

checkbox.addEventListener("change", (event) => {
  document.body.classList.toggle("is-dark-mode");
});
