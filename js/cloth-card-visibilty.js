const clothCard = document.querySelectorAll(".cloth-card");

const ViewAllBtn = document.querySelectorAll(".view-all");

ViewAllBtn.forEach((button) => {
  button.addEventListener("click", viewCards);
});

function viewCards() {
  clothCard[4].classList.toggle("invisible");
  clothCard[5].classList.toggle("invisible");
  clothCard[6].classList.toggle("invisible");
  clothCard[7].classList.toggle("invisible");
  ViewAllBtn.forEach((button) => {
    button.classList.toggle("invisible");
  });
}
