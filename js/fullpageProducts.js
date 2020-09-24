////////////////////////////////////////////// Fonctions //////////////////////////////////////////////


// Format price
function PriceFormat(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

// showProducts = Create a bootstrap card for each product in products
function showProducts() {
  creatProductsSection()
  for (let productNumber = 0; productNumber < products.length; productNumber++) {
    creatProductDiv(productNumber, "col-12", "teddy");
    showProductImage(productNumber);
    CreatDivCardBody(productNumber);
    showProductName(productNumber);
    showProductDescription(productNumber);
    showProductPrice(productNumber);
    showProductButton(productNumber);
  }
}

////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

getProducts("http://localhost:3000/api","teddies").then(function () {
  showProducts();
});
