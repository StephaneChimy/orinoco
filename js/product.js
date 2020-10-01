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

function showColorsOptions(productId, productColors) {
  let value = 1;
  for (const eachColors of productColors) {
    createNode(".select" + productId, "option", {className : "value=" + value, innerText : eachColors}) 
    value++;
  }
}

function showCardProduct(product) {
  //creatProductsSection("row justify-content-around");
  createNode("main", "section", {className : "row justify-content-around"});
  if (product) {
    //creatProductDiv(product._id, "col-8", "teddy");
    createNode("section", "div", {className : "col-8 teddy" + product._id});
    //showProductImage(product._id, product["imageUrl"]);
    createNode(".teddy" + product._id, "img", {className : "image card-img-top img-fluid " + product._id, src : product.imageUrl});
    //CreatDivCardBody(product._id);
    createNode(".teddy" + product._id, "div", {className : "card-body" + product._id});
    //showProductName(product._id, product["name"]);
    createNode(".card-body" + product._id, "h5", {className : "card-title", innerText : product.name});
    //showProductDescription(product._id, product["description"]);
    createNode(".card-body" + product._id, "p", {className : "card-text", innerText : product.description});
    //creatSelect(product._id);
    createNode(".card-body" + product._id, "select", {className : "custom-select browser-default select" + product._id});
    //CreatFirstSelected(product._id);
    createNode(".select" + product._id, "option", {className : "selected",innerText :  "Choisissez votre couleur"});
    
    showColorsOptions(product._id, product.colors);

    //showPrice(product);
    createNode(".card-body" + product._id, "p", {className : "card-text", innerText : PriceFormat(product.price)});
    //showButton(product);
    createNode(".card-body" + product._id, "button", {className : "btn btn-primary addToBasket",innerText : "Ajouter au panier"});
    // Add the script after creating all elements on the page.
    //addScript("./js/intoBasket.js");
    createNode("body", "script",{src : "./js/intoBasket.js"});
  } else {
    console.log("Product not found");
  }
}
