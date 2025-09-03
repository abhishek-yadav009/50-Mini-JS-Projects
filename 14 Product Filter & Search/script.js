const searchBox = document.getElementById("search-box");
const categoryBtns = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product");
const message = document.querySelector(".message");

let selectedCategory = "all";

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedCategory = btn.dataset.category;
    filterProducts();
  });
});

searchBox.addEventListener("input", () => {
  filterProducts();
});

function filterProducts() {
  let searchBoxText = searchBox.value.toLowerCase();

  products.forEach((product) => {
    let productText = product.querySelector("h2").textContent.toLowerCase();

    let category = product.dataset.category;
    if (
      (selectedCategory === "all" || selectedCategory === category) &&
      productText.includes(searchBoxText)
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
