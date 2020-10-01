////////////////////////////////////////////// Variables //////////////////////////////////////////////

let productId = window.location.search.slice(11);
let beingWatchedProduct = null;

////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

// Global declaration of being watched product
fetchProduct(productId, "teddies").then(function (product) {
  // Used by intoBasket.js
  beingWatchedProduct = product;
  //
  showCardProduct(product);
});

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function showProductOptions(productId, productOptions) {
  let value = 1;
  for (const eachOptions of productOptions) {
    createNode(".select" + productId, "option", {className : "value=" + value, innerText : eachOptions}) 
    value++;
  }
}

function showCardProduct(product) {
  createNode("main", "section", {className : "row justify-content-around"});
  if (product) {
    createNode("section", "div", {className : "col-8 teddy" + product._id});
    createNode(".teddy" + product._id, "img", {className : "image card-img-top img-fluid " + product._id, src : product.imageUrl});
    createNode(".teddy" + product._id, "div", {className : "card-body" + product._id});
    createNode(".card-body" + product._id, "h5", {className : "card-title", innerText : product.name});
    createNode(".card-body" + product._id, "p", {className : "card-text", innerText : product.description});
    createNode(".card-body" + product._id, "select", {className : "custom-select browser-default select" + product._id});
    createNode(".select" + product._id, "option", {className : "selected",innerText :  "Choisissez votre couleur"});
    //
    showProductOptions(product._id, product.colors);
    //
    createNode(".card-body" + product._id, "p", {className : "card-text", innerText : PriceFormat(product.price)});
    createNode(".card-body" + product._id, "button", {className : "btn btn-primary addToBasket",innerText : "Ajouter au panier"});
    // Add the script after creating all elements on the page.
    createNode("body", "script",{src : "./js/intoBasket.js"});
  } else {
    console.log("Product not found");
  }
}
