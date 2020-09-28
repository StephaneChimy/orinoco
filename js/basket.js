////////////////////////////////////////////// Variables //////////////////////////////////////////////
////////////////////////////////////////////// Fonction //////////////////////////////////////////////

// function checkLocalStorage() {
//   if (localStorage.length == 0) {
//     console.log("rien dans le localstorage");
//     emptyBasket();
//     return false;
//   } else {
//     console.log("Au moins une donnée est dans localStorage");
//     //getParamFromLocalStorage();
//     return true;
//   }
// }

// function getParamFromLocalStorage() {
//   var cleFound = false;
//   for (cle = 0; cle < localStorage.length; cle++) {
//     if (localStorage.key(cle) == "basket") {
//       console.log("un item est dans le localstorage");
//       // Rapatriement des infos de basket
//       basket = JSON.parse(localStorage.getItem(localStorage.key(cle)));
//       console.log(basket);
//       cleFound = true;
//       return true;
//     }
//   }
//   if (!cleFound) {
//     emptyBasket();
//     return false;
//   }
// }


function showBasket(basket) {
  for (let product = 0; product < basket.products.length; product++) {
    addProductToTable(product);
    addProductNameLigneTable(product,basket);
    addProductQuantiteLigneTable(product, basket);
    getPriceOfProduct(product, basket);
    setPriceOfProduct(product);
    getTotalPrice();
  }
  setTotalPrice(getTotalPrice());
  setClearButton();
}




////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

if (checkLocalStorageKey("basket") === true) {
  console.log("Verification passée");
  getProducts("http://localhost:3000/api", "teddies")
    .then(() => {
      showBasket(getBasket());
    })
    .then(() => {
      clearBasket();
    });
}else{
  emptyBasket();
}
