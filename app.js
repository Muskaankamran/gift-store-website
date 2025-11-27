// Full Product List
const products = [
    // Candles
    {
        name: 'Scented Candle',
        category: 'Candles',
        image: './images/scented candle.webp',
        price: '$15',
        description: 'A beautifully blended scented candle that fills your space with a warm, calming aroma—perfect for creating a cozy atmosphere.'
    },
    {
        name: 'Vanilla Candle',
        category: 'Candles',
        image: './images/vanilla candle.jpg',
        price: '$12',
        description: 'A smooth and creamy vanilla-scented candle that adds comfort and sweetness to any room.'
    },
    {
        name: 'Rose Candle',
        category: 'Candles',
        image: './images/rose candle.jpg',
        price: '$18',
        description: 'Infused with the elegant fragrance of roses, this candle sets a soothing and romantic mood.'
    },
    {
        name: 'Lavender Candle',
        category: 'Candles',
        image: './images/lavender candle.jpg',
        price: '$14',
        description: 'This lavender candle helps relieve stress and promotes relaxation and peaceful sleep.'
    },
    {
        name: 'Birthday Candle Set',
        category: 'Candles',
        image: './images/birthday candle.jpg',
        price: '$20',
        description: 'A colorful set of birthday candles perfect for decorating cakes and making celebrations special.'
    },

    // Books
    {
        name: 'Morivational Book',
        category: 'Books',
        image: './images/book 1.webp',
        price: '$20',
        description: 'A powerful book filled with motivation and positivity to inspire personal growth.'
    },
    {
        name: 'Inspirational Book',
        category: 'Books',
        image: './images/book 2.jpg',
        price: '$18',
        description: 'An uplifting collection of stories and insights designed to inspire and encourage.'
    },
    {
        name: 'Adventure Book',
        category: 'Books',
        image: './images/book 3.jpg',
        price: '$22',
        description: 'A thrilling adventure story full of excitement, mystery, and exploration.'
    },
    {
        name: 'Cooking Book',
        category: 'Books',
        image: './images/book 5.jpg',
        price: '$25',
        description: 'A detailed cooking guide with step-by-step recipes for both beginners and experts.'
    },
    {
        name: 'Art Book',
        category: 'Books',
        image: './images/book 4.jpg',
        price: '$30',
        description: 'A beautifully crafted art book showcasing unique designs, sketches, and techniques.'
    },
    {
        name: 'Mystery Novel',
        category: 'Books',
        image: './images/book 7.jpg',
        price: '$19',
        description: 'A suspenseful mystery novel filled with twists, secrets, and gripping storytelling.'
    },

    // Keychains
    {
        name: 'Cute Keychain',
        category: 'Keychains',
        image: './images/keychain1.webp',
        price: '$5',
        description: 'A small and adorable keychain that adds charm to your keys or bags.'
    },
    {
        name: 'Animal Keychain',
        category: 'Keychains',
        image: './images/kitchen2.jpg',
        price: '$7',
        description: 'A fun animal-themed keychain perfect for animal lovers.'
    },
    {
        name: 'Heart Keychain',
        category: 'Keychains',
        image: './images/kitchen3.jpg',
        price: '$7',
        description: 'A simple, elegant heart-shaped keychain that symbolizes love and positivity.'
    },
    {
        name: 'Mini Cupcake Keychain',
        category: 'Keychains',
        image: './images/keychain5.jpg',
        price: '$5',
        description: 'A cute mini cupcake keychain ideal for gifting or decorating accessories.'
    },
    {
        name: 'Travel Keychain',
        category: 'Keychains',
        image: './images/keychain4.webp',
        price: '$8',
        description: 'A stylish travel-themed keychain that reminds you of your adventures.'
    },

    // Cups
    {
        name: 'Coffee Mug',
        category: 'Cups',
        image: './images/coffee1.jpg',
        price: '$10',
        description: 'A durable ceramic mug perfect for enjoying your morning coffee or tea.'
    },
    {
        name: 'Tea Cup',
        category: 'Cups',
        image: './images/tea.webp',
        price: '$12',
        description: 'A beautifully crafted cup designed for a peaceful tea-drinking experience.'
    },
    {
        name: 'Travel Mug',
        category: 'Cups',
        image: './images/travel mug.avif',
        price: '$15',
        description: 'An insulated mug that keeps your drinks hot or cold while on the go.'
    },
    {
        name: 'Color Changing Mug',
        category: 'Cups',
        image: './images/color cup.jpg',
        price: '$18',
        description: 'A magical mug that changes color when filled with hot liquid.'
    },
    {
        name: 'Personalized Cup',
        category: 'Cups',
        image: './images/customize-mug-printing.png',
        price: '$20',
        description: 'A customizable cup where names or designs can be added for a personal touch.'
    },

    // Notebooks
    {
        name: 'Sequence Notebook',
        category: 'noteBooks',
        image: './images/sequence book.webp',
        price: '$11',
        description: 'A stylish notebook decorated with reversible sequence fabric—fun to use and write in.'
    },
    {
        name: 'Simple Notebook',
        category: 'noteBooks',
        image: './images/simple book.jpg',
        price: '$9',
        description: 'A minimal and clean notebook ideal for daily notes and writing.'
    },
    {
        name: 'Flower Notebook',
        category: 'noteBooks',
        image: './images/flower notebook.jpg',
        price: '$15',
        description: 'A pretty notebook decorated with floral patterns—perfect for creatives.'
    },
    {
        name: 'Fur Notebook',
        category: 'noteBooks',
        image: './images/fur.jpg',
        price: '$10',
        description: 'A soft and fluffy notebook that feels cozy and unique.'
    },
    {
        name: 'Mini Notebook',
        category: 'noteBooks',
        image: './images/mini.webp',
        price: '$8',
        description: 'A compact notebook great for quick notes and portable writing.'
    },

    // Perfumes
    {
        name: 'Floral Affair',
        category: 'Perfumes',
        image: './images/perfume1.webp',
        price: '$33',
        description: 'A refreshing floral perfume that leaves a delicate and lasting fragrance.'
    },
    {
        name: 'Passion',
        category: 'Perfumes',
        image: './images/perfume2.webp',
        price: '$30',
        description: 'A bold and captivating scent expressing confidence and charm.'
    },
    {
        name: 'Pink Rose',
        category: 'Perfumes',
        image: './images/perfume3.webp',
        price: '$28',
        description: 'A soft, romantic fragrance inspired by sweet rose petals.'
    },
    {
        name: 'Cool Brights',
        category: 'Perfumes',
        image: './images/perfume4.jpg',
        price: '$35',
        description: 'A cool, energizing perfume perfect for everyday wear.'
    },

    // Stuffed Toys
    {
        name: 'Doremon Stuffed Toys',
        category: 'toys',
        image: './images/doremon.png',
        price: '$20',
        description: 'A cute and soft Doraemon plush toy—perfect for fans and kids.'
    },
    {
        name: 'Unicorn Stuffed Toys',
        category: 'toys',
        image: './images/unicorn.webp',
        price: '$19',
        description: 'A magical colorful unicorn plush that brings joy to all ages.'
    },
    {
        name: 'Elephant Stuffed Toys',
        category: 'toys',
        image: './images/elephant.webp',
        price: '$19',
        description: 'A cuddly elephant plush toy ideal for hugging and decoration.'
    },
    {
        name: 'Cat Stuffed Toys',
        category: 'toys',
        image: './images/cat.webp',
        price: '$19',
        description: 'A soft cat plush that is adorable and comforting—perfect for cat lovers.'
    },
    {
        name: 'Tea Stuffed Toys',
        category: 'toys',
        image: './images/teaplush.jpg',
        price: '$18',
        description: 'A unique tea-shaped plush toy that is cute, quirky, and fun.'
    },
    {
        name: 'We bare-bear Stuffed Toys',
        category: 'toys',
        image: './images/barebear1.webp',
        price: '$22',
        description: 'A lovable plush toy inspired by the popular We Bare Bears characters.'
    },

    // Other Gifts
    {
        name: 'Handmade Soap',
        category: 'Gifts',
        image: './images/handmade-soap.jpg',
        price: '$8',
        description: 'A gentle handcrafted soap made with natural ingredients—great for skincare.'
    },
    {
        name: 'Mini Plant',
        category: 'Gifts',
        image: './images/plant.jpg',
        price: '$12',
        description: 'A decorative mini plant that brings freshness and life to any space.'
    },
    {
        name: 'Fridge Magnet',
        category: 'Gifts',
        image: './images/magnet.jpg',
        price: '$4',
        description: 'A cute fridge magnet that adds personality and charm to your home.'
    },
    {
        name: 'Canvas',
        category: 'Gifts',
        image: './images/canvas.jpg',
        price: '$15',
        description: 'A beautiful decorative canvas suitable for home décor or gifting.'
    },
    {
        name: 'Decorative Pillow',
        category: 'Gifts',
        image: './images/cushion.jpg',
        price: '$20',
        description: 'A soft, stylish pillow designed to enhance comfort and room décor.'
    },
];



// ⭐ Correct Filter Function
function filterCategory(category) {
    const filtered = products.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
    );
    displayProducts(filtered);
}


// ⭐ FINAL Display Function (correct + description included)
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
                        <p class="card-text fw-bold">${item.price}</p>

                        <p class="card-text" style="font-size: 13px; color: #555;">
                            ${item.description}
                        </p>

                        <button class="btn btn-outline-danger btn-sm mt-auto">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        productList.innerHTML += productCard;
    });
}


// Show all products on page load
displayProducts(products);