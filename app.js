// Full Product List
const products = [
    // Candles
    { name: 'Scented Candle', category: 'Candles', image: './images/scented candle.webp', price: '$15' },
    { name: 'Vanilla Candle', category: 'Candles', image: './images/vanilla candle.jpg', price: '$12' },
    { name: 'Rose Candle', category: 'Candles', image: './images/rose candle.jpg', price: '$18' },
    { name: 'Lavender Candle', category: 'Candles', image: './images/lavender candle.jpg', price: '$14' },
    { name: 'Birthday Candle Set', category: 'Candles', image: './images/birthday candle.jpg', price: '$20' },

    // Books
    { name: 'Morivational Book', category: 'Books', image: './images/book 1.webp', price: '$20' },
    { name: 'Inspirational Book', category: 'Books', image: './images/book 2.jpg', price: '$18' },
    { name: 'Adventure Book', category: 'Books', image: './images/book 3.jpg', price: '$22' },
    { name: 'Cooking Book', category: 'Books', image: './images/book 5.jpg', price: '$25' },
    { name: 'Art Book', category: 'Books', image: './images/book 4.jpg', price: '$30' },
    { name: 'Mystery Novel', category: 'Books', image: './images/book 7.jpg', price: '$19' },

    // Keychains
    { name: 'Cute Keychain', category: 'Keychains', image: './images/keychain1.webp', price: '$5' },
    { name: 'Animal Keychain', category: 'Keychains', image: './images/kitchen2.jpg', price: '$7' },
    { name: 'Heart Keychain', category: 'Keychains', image: './images/kitchen3.jpg', price: '$7' },
    { name: 'Mini Cupcake Keychain', category: 'Keychains', image: './images/keychain5.jpg', price: '$5' },
    { name: 'Travel Keychain', category: 'Keychains', image: './images/keychain4.webp', price: '$8' },

    // Cups
    { name: 'Coffee Mug', category: 'Cups', image: './images/coffee1.jpg', price: '$10' },
    { name: 'Tea Cup', category: 'Cups', image: './images/tea.webp', price: '$12' },
    { name: 'Travel Mug', category: 'Cups', image: './images/travel mug.avif', price: '$15' },
    { name: 'Color Changing Mug', category: 'Cups', image: './images/color cup.jpg', price: '$18' },
    { name: 'Personalized Cup', category: 'Cups', image: './images/customize-mug-printing.png', price: '$20' },

    //notebooks


    // Other Gifts
    { name: 'Handmade Soap', category: 'Gifts', image: './images/handmade-soap.jpg', price: '$8' },
    { name: 'Mini Plant', category: 'Gifts', image: './images/plant.jpg', price: '$12' },
    { name: 'Fridge Magnet', category: 'Gifts', image: './images/magnet.jpg', price: '$4' },
    { name: 'Canvas', category: 'Gifts', image: './images/canvas.jpg', price: '$15' },
    { name: 'Decorative Pillow', category: 'Gifts', image: './images/cushion.jpg', price: '$20' },
];

// Function to display products
function displayProducts(items) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    if (items.length === 0) {
        productList.innerHTML = `<p class="text-center">No products found in this category.</p>`;
        return;
    }
    items.forEach(item => {
        const productCard = `
            <div class="col-md-3 mb-4">
                <div class="card shadow-sm h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.price}</p>
                        <button class="btn btn-outline-danger btn-sm mt-auto">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Function to filter products by category
function filterCategory(category) {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
}

// Show all products by default
displayProducts(products);
