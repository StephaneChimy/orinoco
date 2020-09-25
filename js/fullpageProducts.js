////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// showProducts = Create a bootstrap card for each product in products
function showProducts() {
  creatProductsSection("row mx-auto justify-content-between")
  for (let productNumber = 0; productNumber < products.length; productNumber++) {
    creatProductDiv(productNumber, "col-12", "teddy");
    showProductImage(productNumber, products[productNumber].imageUrl);
    CreatDivCardBody(productNumber);
    showProductName(productNumber, products[productNumber].name);
    showProductDescription(productNumber, products[productNumber].description);
    showProductPrice(productNumber);
    showProductButton(productNumber);
  }
}

////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

getProducts("http://localhost:3000/api","teddies").then(function () {
  showProducts();
});
