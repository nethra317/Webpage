function calculateDiscount(originalPrice) {
    let discountPercentage, discountedPrice;
  
    if (originalPrice >= 500) {
      discountPercentage = 40;
    } else if (originalPrice >= 100) {
      discountPercentage = 30;
    } else if (originalPrice >= 20) {
      discountPercentage = 20;
    } else {
      discountPercentage = 0;
    }
  
    discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  
    return {
      discountPercentage,
      discountedPrice
    };
  }
  
  function onclick1() {
    const productPriceElement = document.getElementById('price');
    const originalPrice = parseFloat(productPriceElement.dataset.price);
  
    const { discountPercentage, discountedPrice } = calculateDiscount(originalPrice);
  
    const discountedPriceElement = document.getElementById('discounted-price-1');
    discountedPriceElement.textContent = `Discounted Price: $${discountedPrice.toFixed(2)} (${discountPercentage}%)`;
    discountedPriceElement.style.display="flex"
  }
  
  function onclick2() {
    const productPriceElement = document.getElementById('price2');
    const originalPrice = parseFloat(productPriceElement.dataset.price);
  
    const { discountPercentage, discountedPrice } = calculateDiscount(originalPrice);
  
    const discountedPriceElement = document.getElementById('discounted-price-2');
    discountedPriceElement.textContent = `Discounted Price: $${discountedPrice.toFixed(2)} (${discountPercentage}%)`;
    discountedPriceElement.style.display="flex"
}
  

  function onclick3() {
    const productPriceElement = document.getElementById('price3');
    const originalPrice = parseFloat(productPriceElement.dataset.price);
  
    const { discountPercentage, discountedPrice } = calculateDiscount(originalPrice);
  
    const discountedPriceElement = document.getElementById('discounted-price-3');
    discountedPriceElement.textContent = `Discounted Price: $${discountedPrice.toFixed(2)} (${discountPercentage}%)`;
    discountedPriceElement.style.display="flex"
}
  