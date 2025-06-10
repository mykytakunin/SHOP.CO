const shopItemsButton = document.querySelector("#shopItemsButton");

const shopItems = document.querySelector("#shopItems");

const shopItem = document.querySelectorAll(".shopItem");

shopItemsButton.addEventListener("click", handleClick);

function handleClick() {
  shopItems.classList.toggle("hidden");
  shopItem.forEach((item) => {
    item.classList.toggle("hidden");
  });
}
