////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

if (checkLocalStorageKey("basket") === true) {
  console.log("Verification passée");
  fetchProducts("teddies")
    .then((products) => {
      showBasket(getLocalstorageKey("basket"), products);
    })
    .then(() => {
      clearBasket();
    });
} else {
  emptyBasket();
}

////////////////////////////////////////////// Fonction //////////////////////////////////////////////
function showBasket(basket, products) {
  let totalPrice = 0;
  // Parcours le basket qui comprend les id des produits
  for (let index = 0; index < basket.products.length; index++) {
    //
    const foundProduct = products.find(
      (product) => product._id === basket.products[index].id
    );
    //

    // Ajoute ligne 0, 1, 2 , 3 ....
    //addProductToTable(basket.products[index].id);
    createNode("tbody", "tr", false, "tbody" + index);
    //

    // Ajoute le nom du produit
    //addProductNameLigneTable(basket.products[index], basket);
    createNode(".tbody" + index, "td", false, "tdProduct" + basket.products[index].id, false, false, basket.products[index].name);
    //

    // Ajoute la quantité
    //addProductQuantiteLigneTable(basket.products[index], basket);
    createNode(".tbody" + index, "td", false, "tdQuantite" + basket.products[index].id, false, false, basket.products[index].quantity);
    //

    // Ajoute la prix unitaire du produit
    //setPriceOfProduct(foundProduct.price, basket.products[index].id);
    createNode(".tbody" + index, "td", false, "tdPrice" + basket.products[index].id, false, false, PriceFormat(foundProduct.price));
    //

    // Calcul du total
    totalPrice += foundProduct.price * basket.products[index].quantity;
  }
  // Afficher le total
  //setTotalPrice(totalPrice);
  createNode(".total", "th", false, false, false, false ,PriceFormat(totalPrice));

  // Affiche le bouton Clear
  //setClearButton();
  createNode(".total", "th", "clear", "btn btn-outline-secondary", false, false, "x");
}

