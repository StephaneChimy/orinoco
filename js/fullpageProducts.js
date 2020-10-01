////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

fetchProducts("teddies").then(function (products) {
  showProducts(products);
});

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// fonctions of showProducts are in domElements.js
function showProducts(products) {
  //createNode("main", "section", false ,"row mx-auto justify-content-between");
  createNode("main", "section", {className : "row mx-auto justify-content-between"});
  //creatProductsSection("row mx-auto justify-content-between");
  for (
    let productIndex = 0;
    productIndex < products.length;
    productIndex++
  ) {
    //creatProductDiv(productIndex, "col-12", "teddy");
    createNode("section", "div", {className :"card col-12 teddy" + productIndex});
    //showProductImage(productIndex, products[productIndex].imageUrl);
    createNode(".teddy" + productIndex, "img", {className : "image card-img-top img-fluid", src : products[productIndex].imageUrl});
    //CreatDivCardBody(productIndex);
    createNode(".teddy" + productIndex, "div", {className : "card-body" + productIndex});
    //showProductName(productIndex, products[productIndex].name);
    createNode(".card-body" + productIndex, "h5", {className : "card-title", innerText : products[productIndex].name});
    //showProductDescription(productIndex, products[productIndex].description);
    createNode(".card-body" + productIndex, "p", {className : "card-text", innerText : products[productIndex].description});
    //showProductPrice(productIndex, products[productIndex]);
    createNode(".card-body" + productIndex, "p", { className :"card-text", innerText : PriceFormat(products[productIndex].price)});
    //showProductButton(productIndex, products[productIndex]);
    createNode(".card-body" + productIndex, "a", {className : "btn btn-primary", href : "/product.html?ProductId=" + products[productIndex]._id, innerText : "Détail"});
  }
}

