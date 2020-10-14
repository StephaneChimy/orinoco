function getLocalstorageKey(key) {
  let basket = JSON.parse(localStorage.getItem(key));
  return basket;
}
function checkLocalStorageKey(keyName) {
  var keyFound = false;
  for (key = 0; key < localStorage.length; key++) {
    if (localStorage.key(key) == keyName) {
      console.log("Clé " + keyName + " trouvé");
      keyFound = true;
      return true;
    }
  }
  if (!keyFound) {
    return false;
  }
}
//Price in cents to euros
function centsToEuros(priceInCents){
  let result = priceInCents / 100;
  return result;
}

// Format price
function PriceFormat(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(centsToEuros(price));
}

// Return the quantity of products put in the basket
function getQuantityOfProductsInBasket(basket) {
  let quantity = 0;
  let quantityOfProducts = 0;
  for (var product = 0; product < basket.products.length; product++) {
    quantity = basket.products[product].quantity;
    quantityOfProducts += quantity;
  }
  return quantityOfProducts;
}


