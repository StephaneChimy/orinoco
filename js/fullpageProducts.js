////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

fetchProducts("teddies").then(function (products) {
  showProducts(products);
});

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// fonctions of showProducts are in domElements.js
function showProducts(products) {
  createNode("main", "section", false ,"row mx-auto justify-content-between");
  //creatProductsSection("row mx-auto justify-content-between");
  for (
    let productIndex = 0;
    productIndex < products.length;
    productIndex++
  ) {
    //creatProductDiv(productIndex, "col-12", "teddy");
    createNode("section", "div", false ,"card col-12 teddy" + productIndex);
    //showProductImage(productIndex, products[productIndex].imageUrl);
    createNode(".teddy" + productIndex, "img", false ,"image card-img-top img-fluid", products[productIndex].imageUrl);
    //CreatDivCardBody(productIndex);
    createNode(".teddy" + productIndex, "div", false ,"card-body" + productIndex);
    //showProductName(productIndex, products[productIndex].name);
    createNode(".card-body" + productIndex, "h5", false ,"card-title", false, false, products[productIndex].name);
    //showProductDescription(productIndex, products[productIndex].description);
    createNode(".card-body" + productIndex, "p", false ,"card-text", false, false, products[productIndex].description);
    //showProductPrice(productIndex, products[productIndex]);
    createNode(".card-body" + productIndex, "p", false ,"card-text", false, false, PriceFormat(products[productIndex].price));
    //showProductButton(productIndex, products[productIndex]);
    createNode(".card-body" + productIndex, "a", false ,"btn btn-primary", false, "/product.html?ProductId=" + products[productIndex]._id, "Détail");
  }
}

