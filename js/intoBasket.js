////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// 1 - Listen button / If clicked => Fonction checkLocalStorage & showBadges()
function listenButton() {
  var getButton = document.querySelector(".addToBasket");
  console.log(getButton);
  getButton.addEventListener("click", () => {
    checkLocalStorage();
    showBadges();
  });
}

// 2 - If localStorage is empty => Put the product in the basket // Else check parameters in localStorage
function checkLocalStorage() {
  if (localStorage.length < 1) {
    console.log("rien dans le localstorage");
    pushProductInBasket();
  } else {
    console.log("Au moins une donnée est dans localStorage");
    checkKeyFromLocalStorage();
  }
}
// 3 - Check if localStorage have a key named "basket", If yes => checkProduct() // Else pushProductInBasket()
function checkKeyFromLocalStorage() {
  let keyFound = false;
  for (cle = 0; cle < localStorage.length; cle++) {
    if (localStorage.key(cle) == "basket") {
      console.log("un produit est déjà dans le localstorage");
      // Rapatriement des infos de la clé basket dans basket
      basket = JSON.parse(localStorage.getItem(localStorage.key(cle)));
      console.log(basket);
      checkIdProduct(basket);
      return (keyFound = true);
    }
  }
  if (!keyFound) {
    pushProductInBasket();
  }
}
// 4 - Check if the id of the product is in the basket, if yes => incrementItem() // Else pushProductInBasket()
function checkIdProduct(basket) {
  var productFound = false;
  for (let item = 0; item < basket.products.length; item++) {
    if (basket.products[item].id == beingWatchedProduct._id) {
      // console.log(product.name + " est déjà dans le panier");
      productFound = true;
      incrementItem(item);
    }
  }
  if (!productFound) {
    // console.log(product.name + " n'est pas dans localStorage");
    pushProductInBasket();
  }
}
// 5 - Incrementation of quantity then sendToLocalStorage()
function incrementItem(item) {
  basket.products[item].Quantite += 1;
  console.log(basket);
  sendToLocalStorage();
  //window.location.reload();
}
// 6 - Send the basket to the localstorage
function sendToLocalStorage() {
  basketJsoned = JSON.stringify(basket);
  localStorage.setItem("basket", basketJsoned);
  console.log(JSON.parse(localStorage.getItem("basket")));
}
// 7 - Send the product in the basket
function pushProductInBasket() {
  let numberOfProduct = 1;
  basket.products.push({
    Nom: beingWatchedProduct.name,
    id: beingWatchedProduct._id,
    Quantite: numberOfProduct,
  });

  console.log(basket.products.Quantite);
  sendToLocalStorage();
  //window.location.reload();
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

listenButton();
