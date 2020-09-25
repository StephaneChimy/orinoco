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

function getBasket() {
  let basket = JSON.parse(localStorage.getItem(localStorage.key(key)));
  return basket;
}
// Format price
function PriceFormat(price) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  }

// fonctions of showProducts are in domElements.js
function showProducts() {
  creatProductsSection("row mx-auto justify-content-between");
  for (
    let productNumber = 0;
    productNumber < products.length;
    productNumber++
  ) {
    creatProductDiv(productNumber, "col-12", "teddy");
    showProductImage(productNumber, products[productNumber].imageUrl);
    CreatDivCardBody(productNumber);
    showProductName(productNumber, products[productNumber].name);
    showProductDescription(productNumber, products[productNumber].description);
    showProductPrice(productNumber);
    showProductButton(productNumber);
  }
}
