// Example JSON data for products (replace this with actual product data)
const productsData = [
    {
      id: 1,
      name: "Product 1",
      image: "./product1.webp",
      price: 80
    },
    {
      id: 2,
      name: "Product 2",
      image: "./product2.jpeg",
      price: 150
    },
    {
      id: 3,
      name: "Product 3",
      image: "./product3.jpeg",
      price: 600
    },
    // Add more products here as needed
  ];
  // Function to generate product cards dynamically
function generateProductCards(products) {
  const container = document.querySelector('.container');

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p class="price price-${product.id}">$${product.price}</p>
      <p class="discounted-price"></p>
    `;
    container.appendChild(card);
  });

  // Call the function to apply discounts after product cards are generated
  applyDiscounts();
}

// Call the function to generate product cards using the provided data
generateProductCards(productsData);
  