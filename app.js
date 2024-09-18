// Smooth scrolling for user navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product list and checkout system

let products = [
    { id: 1, name: "Aspirin", price: 5.00 },
    { id: 2, name: "Paracetamol", price: 3.00 },
    { id: 3, name: "Ibuprofen", price: 8.00 }
];

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        displayCart();
    }
}

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function displayCart() {
    const cartContainer = document.getElementById('cart-list');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
