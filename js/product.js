////////////////////////////////////////////// Variables //////////////////////////////////////////////
let basket = {
  products: [],
};
let productId = window.location.search.slice(11);
////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function showCardProduct() {
  creatProductsSection("row justify-content-around");
  creatProductDiv(product._id, "col-8", "teddy");
  showProductImage(product._id, product["imageUrl"]);
  CreatDivCardBody(product._id);
  showProductName(product._id, product["name"]);
  showProductDescription(product._id, product["description"]);
  creatSelect(product._id);
  CreatFirstSelected(product._id);
  showColorsOptions(product._id, product["colors"]);
  showPrice(product._id);
  showButton();
  // Add the script after creating all elements on the page.
  addScript("./js/intoBasket.js");
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

getProduct("http://localhost:3000/api", "teddies", productId).then(function () {
  showCardProduct();
});
