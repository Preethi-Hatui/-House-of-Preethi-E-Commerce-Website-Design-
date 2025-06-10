// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price, imageUrl) {
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // If the product already exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // Otherwise, add the product to the cart
        const newProduct = {
            name: productName,
            price: price,
            image: imageUrl,
            quantity: 1
        };
        cart.push(newProduct);
    }

    // Update the cart display
    displayCart();
}

// Function to display the cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';  // Clear the cart display

    // Loop through each item in the cart
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });

    // Calculate and display the total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = `Total: ₹${totalPrice}`;
}
