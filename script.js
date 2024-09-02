// Get the form and graph elements
const productForm = document.getElementById('product-form');
const priceGraphElement = document.getElementById('price-graph-bars');
const ratingGraphElement = document.getElementById('rating-graph-bars');

// Initialize the product data array
let products = [];

// Function to add a new product to the data array
function addProduct(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productRating = document.getElementById('product-rating').value;
    products.push({ name: productName, price: productPrice, rating: productRating });
    updateGraphs();
}

// Function to update the graphs with the latest data
function updateGraphs() {
    // Clear the graphs
    priceGraphElement.innerHTML = '';
    ratingGraphElement.innerHTML = '';

    // Display the products in the graphs
    products.forEach((product) => {
        const priceBarElement = document.createElement('div');
        priceBarElement.className = 'bar';
        priceBarElement.style.height = `${product.price}px`;
        const priceLabelElement = document.createElement('div');
        priceLabelElement.className = 'bar-label';
        priceLabelElement.textContent = product.name;
        priceGraphElement.appendChild(priceBarElement);
        priceGraphElement.appendChild(priceLabelElement);

        const ratingBarElement = document.createElement('div');
        ratingBarElement.className = 'bar';
        ratingBarElement.style.height = `${product.rating}px`;
        const ratingLabelElement = document.createElement('div');
        ratingLabelElement.className = 'bar-label';
        ratingLabelElement.textContent = product.name;
        ratingGraphElement.appendChild(ratingBarElement);
        ratingGraphElement.appendChild(ratingLabelElement);
    });
}

// Add event listener to the form
productForm.addEventListener('submit', addProduct);

// Add event listeners to the sort buttons
document.getElementById('sort-price').addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
});

document.getElementById('sort-rating').addEventListener('click', () => {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
});