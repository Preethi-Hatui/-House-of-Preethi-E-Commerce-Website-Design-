// Function to add an item to the cart
function addToCart(name, price, image) {
    // Get the current cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex !== -1) {
        // If item is already in the cart, increase quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Otherwise, add the item to the cart with quantity 1
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Display cart items when the cart page loads
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-list');
    const totalPriceElement = document.querySelector('.total-price span');

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear any old items
    cartItemsContainer.innerHTML = '';
    let total = 0;

    // If the cart is empty, show a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        totalPriceElement.textContent = 'Total: $0.00';
        return;
    }

    // Loop and display each item
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="item-actions">
                <button onclick="removeItem(${index})">Remove</button>
                <button onclick="updateQuantity(${index}, 'increase')">+</button>
                <button onclick="updateQuantity(${index}, 'decrease')">-</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);

        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item exists
    if (cart[index]) {
        cart.splice(index, 1); // remove item by index
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems(); // refresh the list
    }
}

// Update item quantity (increase/decrease)
function updateQuantity(index, action) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item exists
    if (cart[index]) {
        if (action === 'increase') {
            cart[index].quantity += 1;
        } else if (action === 'decrease' && cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems(); // refresh the list
    }
}

// Clear entire cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems(); // refresh the list
}
