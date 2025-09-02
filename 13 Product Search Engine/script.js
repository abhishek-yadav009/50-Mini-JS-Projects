const searchBox = document.querySelector("#search-item")
const products = document.querySelectorAll(".product")
const message = document.querySelector(".message")

// Create a "not available" message element (optional)
// You could also create this directly in HTML
let notAvailable = document.createElement("p")
notAvailable.classList.add("no-cards")
notAvailable.innerText = "No cards available by this name"
message.appendChild(notAvailable)
notAvailable.style.display = "none" // hide it until needed

// Add event listener to the search box to filter products
searchBox.addEventListener("input", () => {
    let searchValue = searchBox.value.toLowerCase()
    let isVisible = false  // tracks if any product matches the search

    // Loop through all products and check their <h2> text
    products.forEach(product => {
        let productText = product.querySelector("h2").textContent.toLowerCase()

        // If product name includes the search input, show it; otherwise, hide it
        if (productText.includes(searchValue)) {   
            product.style.display = "block"
            isVisible = true
        } else {
            product.style.display = "none"
        }
    });

    // Show or hide the "not available" message based on search results
    if (isVisible) {
        notAvailable.style.display = "none"
    } else {
        notAvailable.style.display = "block"
    }
})
