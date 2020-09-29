function getQuantityOfProductsInBasket(basket) {
  let quantity = 0;
  let quantityOfProducts = 0;
  for (var product = 0; product < basket.products.length; product++) {
    quantity = basket.products[product].quantity;
    quantityOfProducts += quantity;
  }
  return quantityOfProducts;
}

function showBadges() {
  let badgesSpan = document.querySelector(".badge");
  if (checkLocalStorageKey("basket")) {
    nbProducts = getQuantityOfProductsInBasket(getLocalstorageKey("basket"));
  } else {
    nbProducts = "";
  }
  badgesSpan.innerHTML = nbProducts;
}

if (config.badgesEnabled) {
  showBadges();
  console.log("Écriture des badges");
}
