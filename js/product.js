////////////////////////////////////////////// Variables //////////////////////////////////////////////
let basket = {
  products: [],
};
let productId = window.location.search.slice(11);
////////////////////////////////////////////// Fonctions //////////////////////////////////////////////
let beingWatchedProduct = null;

function showColorsOptions(productId, productColors) {
  let value = 1;
  for (const eachColors of productColors) {
    createNode(".select" + productId, "option", false, "value=" + value, false, false, eachColors) 
    value++;
  }
}

function showCardProduct(product) {
  //creatProductsSection("row justify-content-around");
  createNode("main", "section", false ,"row justify-content-around", false);
  if (product) {
    //creatProductDiv(product._id, "col-8", "teddy");
    createNode("section", "div", false ,"col-8 teddy" + product._id, false);
    //showProductImage(product._id, product["imageUrl"]);
    createNode(".teddy" + product._id, "img", false ,"image card-img-top img-fluid " + product._id, product.imageUrl);
    //CreatDivCardBody(product._id);
    createNode(".teddy" + product._id, "div", false ,"card-body" + product._id);
    //showProductName(product._id, product["name"]);
    createNode(".card-body" + product._id, "h5", false ,"card-title", false, false, product.name);
    //showProductDescription(product._id, product["description"]);
    createNode(".card-body" + product._id, "p", false ,"card-text", false, false, product.description);
    //creatSelect(product._id);
    createNode(".card-body" + product._id, "select", false ,"custom-select browser-default select" + product._id);
    //CreatFirstSelected(product._id);
    createNode(".select" + product._id, "option", false ,"selected", false, false, "Choisissez votre couleur");
    
    showColorsOptions(product._id, product.colors);

    //showPrice(product);
    createNode(".card-body" + product._id, "p", false ,"card-text", false, false, PriceFormat(product.price));
    //showButton(product);
    createNode(".card-body" + product._id, "button", false ,"btn btn-primary addToBasket", false, false, "Ajouter au panier");
    // Add the script after creating all elements on the page.
    //addScript("./js/intoBasket.js");
    createNode("body", "script", false, false, "./js/intoBasket.js");
  } else {
    console.log("Product not found");
  }
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

// Global declaration of being watched product
fetchProduct(productId, "teddies").then(function (product) {
  // Used by intoBasket.js
  beingWatchedProduct = product;
  //
  showCardProduct(product);
});
