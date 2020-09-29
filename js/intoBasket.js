

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// 1 - Listen button / If clicked => Fonction checkLocalStorage & showBadges()
function listenButton() {
  var getButton = document.querySelector(".addToBasket");
  console.log(getButton);
  getButton.addEventListener("click", () => {
    pushProductInBasket(beingWatchedProduct)
    showBadges();
  });
}

function pushProductInBasket(beingWatchedProduct){
// Check if the key basket exist in the localstorage  
  if(checkLocalStorageKey("basket")){
    basket = getLocalstorageKey("basket");
    console.log("Des produits sont déjà dans le panier");
    // Check if the product id of the curent page is in the basket
    if(checkProductIdInBasket(basket, beingWatchedProduct._id)){
      console.log("Le produit est déjà dans le panier");
      // Increment the quantity of the product in the basket
      incrementProductInBasket(getIndexOfProductInBasket(basket, beingWatchedProduct._id)); // retourne l'index du produit trouvé dans le panier
      console.log(basket);
      sendBasketToLocalStorage(basket);
      
    }else{

      console.log("Le produit n'est pas dans le panier");
      pushNewProductInBasket(beingWatchedProduct, basket);
      sendBasketToLocalStorage(basket);
    }

  }else{
    // If the key basket doesn't exist in the localstorage
    let basket = {
      products: []
    };
    pushNewProductInBasket(beingWatchedProduct, basket);
    sendBasketToLocalStorage(basket);
  };


};

function checkProductIdInBasket(basket, productId) {
  var productFound = false;
  for (let index = 0; index < basket.products.length; index++) {
    if (basket.products[index].id == productId) {
      console.log("Id du produit = " + basket.products[index].id);
      productFound = true;
      return true;
    }
  }
  if (!productFound) {
    return false
  }
}

function getIndexOfProductInBasket(basket, productId){
  var indexOfProduct = null;
  for (let index = 0; index < basket.products.length; index++) {
    if (basket.products[index].id == productId) {
      console.log("Index du produit trouvé = " + index);
      indexOfProduct = index;
      return indexOfProduct
    }
  }
}

function incrementProductInBasket(index) {
  basket.products[index].quantity += 1;
}

function pushNewProductInBasket(product, basket){
  let numberOfProduct = 1;
  basket.products.push({
    name: product.name,
    id: product._id,
    quantity: numberOfProduct,
  });
};

function sendBasketToLocalStorage(basket) {
    basketJsoned = JSON.stringify(basket);
    localStorage.setItem("basket", basketJsoned);
    console.log(JSON.parse(localStorage.getItem("basket")));
  }

// 4 - Check if the id of the product is in the basket, if yes => incrementItem() // Else pushProductInBasket()
//product, basketKey
// function pushProduct(){
//   if(checkLocalStorageKey("basket")){
//     console.log("La clé basket existe")
//     basket = getLocalstorageKey("basket");
//       if(checkIdProduct(basket) == true){
//         console.log("Le produit est déjà dans le panier");
//         incrementItem(getIndexOfProduct(basket));
//         sendBasketToLocalStorage(basket);
//       }
//   }else{
//     pushNewProductInBasket(beingWatchedProduct, basket);
//     sendBasketToLocalStorage(basket);
// };
// }





// 5 - Incrementation of quantity then sendToLocalStorage()


// 6 - Send the basket to the localstorage
// function sendBasketToLocalStorage(basket) {
//   basketJsoned = JSON.stringify(basket);
//   localStorage.setItem("basket", basketJsoned);
//   console.log(JSON.parse(localStorage.getItem("basket")));
// }

// 7 - Send the product in the basket
// function pushNewProductInBasket(product, basket) {
//   let numberOfProduct = 1;
//   basket.products.push({
//     Nom: product.name,
//     id: product._id,
//     Quantite: numberOfProduct,
//   });

  //console.log(basket.products.Quantite);
  //sendBasketToLocalStorage();
  //window.location.reload();
//}

////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

listenButton();
