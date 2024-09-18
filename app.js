// Starting java to add cart
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} added to cart`);
    updateCartTotal();
}

// Function to update the total amount in the cart
function updateCartTotal() {
    let total = 0;
    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";  // Clear the list

    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Function to proceed to checkout
function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase! Proceeding to payment...");
        cart = [];  // Clear the cart after purchase
        updateCartTotal();
    } else {
        alert("Your cart is empty!");
    }
}

