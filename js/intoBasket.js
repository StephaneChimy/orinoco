////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// 1 - Listen button / If clicked => Fonction checkLocalStorage & showBadges()
function listenButton() {
  var getButton = document.querySelector(".addToBasket");
  console.log(getButton);
  getButton.addEventListener("click", () => {
    pushProduct()
    showBadges();
  });
}

// 4 - Check if the id of the product is in the basket, if yes => incrementItem() // Else pushProductInBasket()
//product, basketKey
function pushProduct(){
  if(checkLocalStorageKey("basket")){
    console.log("La clé basket existe")
    basket = getLocalstorageKey("basket");
      if(checkIdProduct(basket) == true){
        console.log("Le produit est déjà dans le panier");
        incrementItem(getIndexOfProduct(basket));
      }
  }else{
    pushNewProductInBasket();
};
}

function checkIdProduct(basket) {
  var productFound = false;
  for (let index = 0; index < basket.products.length; index++) {
    if (basket.products[index].id == beingWatchedProduct._id) {
      // console.log(product.name + " est déjà dans le panier");
      console.log("Id du produit = " + basket.products[index].id);
      productFound = true;
      //incrementItem(index);
      return true;
    }
  }
  if (!productFound) {
    // console.log(product.name + " n'est pas dans localStorage");
    pushNewProductInBasket();
  }
}
function getIndexOfProduct(basket){
  var indexOfProduct = null;
  for (let index = 0; index < basket.products.length; index++) {
    if (basket.products[index].id == beingWatchedProduct._id) {
      // console.log(product.name + " est déjà dans le panier");
      console.log("Index du produit trouvé = " + index);
      indexOfProduct = index;
      //incrementItem(index);
      return indexOfProduct
    }
  }
}
// 5 - Incrementation of quantity then sendToLocalStorage()
function incrementItem(item) {
  basket.products[item].Quantite += 1;
  console.log(basket);
  sendBasketToLocalStorage();
  //window.location.reload();
}
// 6 - Send the basket to the localstorage
function sendBasketToLocalStorage() {
  basketJsoned = JSON.stringify(basket);
  localStorage.setItem("basket", basketJsoned);
  console.log(JSON.parse(localStorage.getItem("basket")));
}
// 7 - Send the product in the basket
function pushNewProductInBasket() {
  let numberOfProduct = 1;
  basket.products.push({
    Nom: beingWatchedProduct.name,
    id: beingWatchedProduct._id,
    Quantite: numberOfProduct,
  });

  console.log(basket.products.Quantite);
  sendBasketToLocalStorage();
  //window.location.reload();
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

listenButton();
