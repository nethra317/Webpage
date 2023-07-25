// Function to calculate the discounted price based on the provided rules
function calculateDiscountedPrice(price) {
  if (price >= 500) {
    return price * 0.6; // 40% discount
  } else if (price >= 100) {
    return price * 0.7; // 30% discount
  } else if (price >= 20) {
    return price * 0.8; // 20% discount
  } else {
    return price; // No discount if price is less than 20
  }
}

// Function to apply discounts to the product cards
function applyDiscounts() {
  const priceElements = document.querySelectorAll('[class^="price-"]');
  priceElements.forEach(element => {
    const productId = element.classList[0].replace('price-', '');
    const originalPrice = parseFloat(element.innerText.replace('$', ''));
    const discountedPrice = calculateDiscountedPrice(originalPrice);

    // Find the discounted price element or create one if not present
    let discountedPriceElement = element.nextElementSibling;
    if (!discountedPriceElement || !discountedPriceElement.classList.contains('discounted-price')) {
      discountedPriceElement = document.createElement('p');
      discountedPriceElement.classList.add("discounted-price");
      element.parentNode.appendChild(discountedPriceElement);
    }

    discountedPriceElement.innerText = `$${discountedPrice.toFixed(2)}`;
  });
}

// Call the function to apply discounts after the DOM is ready
document.addEventListener('DOMContentLoaded', applyDiscounts);
