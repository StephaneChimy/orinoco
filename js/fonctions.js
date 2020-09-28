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
// Format price
function PriceFormat(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
function getBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  console.log(basket);
  return basket;
}


function clearBasket() {
  let button = document.querySelector("#clear");

  button.addEventListener("click", (e) => {
    //e.preventDefault();
    console.log("Vidage du panier");
    localStorage.removeItem("basket");
    // Reload the page
    window.location.reload();
  });
}
function getPriceOfProduct(product, basket) {
  for (nbElem = 0; nbElem < products.length; nbElem++) {
    if (products[nbElem]._id === basket.products[product].id) {
      PriceOfProduct = products[nbElem].price;
      console.log(basket.products[product].Nom + " = " + PriceOfProduct);
      return PriceOfProduct;
    }
  }
}
function getTotalPrice() {
  let totalPrice = 0;
  for (let product = 0; product < basket.products.length; product++) {
    for (var nbElem = 0; nbElem < products.length; nbElem++) {
      if (products[nbElem]._id === basket.products[product].id) {
        PriceOfProduct = products[nbElem].price;
        var quantiteOfProduct = basket.products[product].Quantite;
        totalPrice += PriceOfProduct * quantiteOfProduct;
      }
    }
  }
  return totalPrice;
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
