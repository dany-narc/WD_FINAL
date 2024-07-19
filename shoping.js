document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Sunflower Bundle',
            price: 250.00,
            image: 'sunflowers.jpg'
        },
        {
            id: 2,
            name: 'Yellow Bundle',
            price: 300.00,
            image: 'yellow.jpeg'
        },
        {
            id: 3,
            name: 'Blue Bundle',
            price: 200.00,
            image: 'blue.jpeg'
        }
    ];

    const productContainer = document.getElementById('products');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = [];

    function renderProducts() {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4 product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>PHP${product.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productCard);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const cartItem = document.createElement('li');
            cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            cartItem.innerHTML = `
                ${item.name} - PHP${item.price.toFixed(2)}
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    window.addToCart = addToCart;
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        renderCart();
    }

    renderProducts();
});
