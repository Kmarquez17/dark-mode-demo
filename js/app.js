const checkbox = document.querySelector("#checkbox");

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true)
}

checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.classList.add("is-dark-mode");
    document.body.classList.remove("is-light-mode");
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
});
