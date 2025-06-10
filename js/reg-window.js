const regWindow = document.querySelector(".reg-window-container");

const regButton = document.querySelector(".regButton");

regButton.addEventListener("click", handleClick);

function handleClick() {
  regWindow.classList.add("isHidden");
}
