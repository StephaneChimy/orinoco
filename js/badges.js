let basket;

function getParamFromLocalStorage() {
  var cleFound = false;
  for (cle = 0; cle < localStorage.length; cle++) {
    if (localStorage.key(cle) == "basket") {
      console.log("un item est dans le localstorage");
      // Rapatriement des infos dans basket
      basket = JSON.parse(localStorage.getItem(localStorage.key(cle)));
      console.log(basket);
      cleFound = true;
      getQuantityOfProducts();
      return true;
    }
  }
  if (!cleFound) {
    showBadges("");
  }
}
function getQuantityOfProducts() {
  let quantite = 0;
  let quantiteOfProducts = 0;
  for (var product = 0; product < basket.products.length; product++) {
    quantite = basket.products[product].Quantite;
    quantiteOfProducts += quantite;
  }
  return quantiteOfProducts;
}

function showBadges(products) {
  let badgesSpan = document.querySelector(".badge");
  badgesSpan.textContent = products;
}

getParamFromLocalStorage();
showBadges(getQuantityOfProducts());
