function checkLocalStorageKey(keyName) {
  var keyFound = false;
  for (key = 0; key < localStorage.length; key++) {
    if (localStorage.key(key) == keyName) {
      console.log("Clé trouvé");
      keyFound = true;
      return true;
    }
  }
  if (!keyFound) {
    return false;
  }
}

function getQuantityOfProductsInBasket(basket) {
  let quantite = 0;
  let quantiteOfProducts = 0;
  for (var product = 0; product < basket.products.length; product++) {
    quantite = basket.products[product].Quantite;
    quantiteOfProducts += quantite;
  }
  return quantiteOfProducts;
}

function showBadges() {
  let badgesSpan = document.querySelector(".badge");
  if (checkLocalStorageKey("basket")) {
    let basket = JSON.parse(localStorage.getItem(localStorage.key(key)));
    // console.log(basket);
    nbProducts = getQuantityOfProductsInBasket(basket);
  } else {
    nbProducts = "";
  }
  badgesSpan.innerHTML = nbProducts;
}

if (config.badgesEnabled) {
  showBadges();
  console.log("Écriture des badges");
}