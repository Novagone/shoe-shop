function updateCartTotal() {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;
    cartItems.forEach((item) => {
        const price = parseFloat(item.dataset.price);
        total += price;
    });
    document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Function to handle the "Add to Cart" button click event
function addToCart(event) {
    const shoeCard = event.target.closest(".shoe-card");
    const shoeName = shoeCard.querySelector("h3").textContent;
    const shoePrice = parseFloat(shoeCard.querySelector(".shoe-price").textContent.replace("Price: $", ""));
    const cartItems = document.getElementById("cart-items");
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.dataset.price = shoePrice;
    cartItem.textContent = `${shoeName} - $${shoePrice.toFixed(2)}`;
    cartItems.appendChild(cartItem);
    updateCartTotal();
}

// Add "Add to Cart" button click event listeners to all buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
});