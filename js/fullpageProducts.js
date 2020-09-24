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
  creatTeddySection()
  for (var product = 0; product < products.length; product++) {
    creatTeddyDiv(product);
    showImage(product);
    CreatDivCardBody(product);
    showName(product);
    showDescription(product);
    showPrice(product);
    showButton(product);
  }
}

////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

getProducts("http://localhost:3000/api","teddies").then(function () {
  showProducts();
});
