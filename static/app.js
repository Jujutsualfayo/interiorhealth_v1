// User navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product list and checkout system
let cart = [];

function addToCart(productId) {
    fetch('/add-to-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product_id: productId })
    })
    .then(response => response.json())
    .then(product => {
        if (product.error) {
            console.error('Error adding product:', product.error);
        } else {
            cart.push(product);
            displayCart();
        }
    })
    .catch(error => console.error('Error:', error));
}

function displayProducts() {
    fetch('/products')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.getElementById('product-list');
        productContainer.innerHTML = '';  // Clear previous products
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


