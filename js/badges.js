function checkLocalStorageKey() {
  var cleFound = false;
  for (cle = 0; cle < localStorage.length; cle++) {
    if (localStorage.key(cle) == "basket") {
      console.log("un item est dans le localstorage");
      cleFound = true;
      return true;
    }
  }
  if (!cleFound) {
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
  if (checkLocalStorageKey()) {
    let basket = JSON.parse(localStorage.getItem(localStorage.key(cle)));
    // console.log(basket);
    nbProducts = getQuantityOfProductsInBasket(basket);
  }else{
    nbProducts = "";
  }
  badgesSpan.innerHTML = nbProducts;
}

if (config.badgesEnabled) {
  showBadges();
  console.log("Écriture des badges");
}
