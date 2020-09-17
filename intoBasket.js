// 1 - Écoute sur le bouton / Si cliqué => fonction checkLocalStorage

function listenButton() {
  var getButton = document.querySelector(".addToBasket");
  console.log(getButton);
  getButton.addEventListener("click", () => {
    checkLocalStorage();
  });
}
// 2 - Si le localStorage est vide => Met le produit dans le panier // Sinon Check des paramètres dans le localStorage
function checkLocalStorage() {
  if (localStorage.length < 1) {
    console.log("rien dans le localstorage");
    pushProductInBasket();
  } else {
    console.log("Au moins une donnée est dans localStorage");
    checkKeyFromLocalStorage();
  }
}
// 3 - Si le localStorage contient la clé "basket", si oui => checkProduct() // Sinon pushProductInBasket()
function checkKeyFromLocalStorage() {
  // Vérification si la clé est bien "basket"
  let keyFound = false;
  for (cle = 0; cle < localStorage.length; cle++) {
    if (localStorage.key(cle) == "basket") {
      console.log("un produit est déjà dans le localstorage");
      // Rapatriement des infos de la clé basket dans basket
      basket = JSON.parse(localStorage.getItem(localStorage.key(cle)));
      console.log(basket);
      checkIdProduct();
      return keyFound = true;
    }
  }
  if (!keyFound) {
    pushProductInBasket();
  }
}
// 4 - Vérification si l'id du produit est dans basket, si oui => incrementItem() // Sinon pushProductInBasket()
function checkIdProduct() {
  var productFound = false;
  for (let item = 0; item < basket.products.length; item++) {
    if (basket.products[item].id == product._id) {
      console.log(product.name + " est déjà dans le panier");
      productFound = true;
      incrementItem(item);
    }
  }
  if (!productFound) {
    console.log(product.name + " n'est pas dans localStorage");
    pushProductInBasket();
  }
}
// 5 - Incrémentation de la quantité puis envoi au localStorage
function incrementItem(item) {
  basket.products[item].Quantite += 1;
  console.log(basket);

  sendToLocalStorage();
}
// 6 - Envoi du panier au localStorage
function sendToLocalStorage() {
  basketJsoned = JSON.stringify(basket);
  localStorage.setItem("basket", basketJsoned);
  console.log(JSON.parse(localStorage.getItem("basket")));
}
// 7 - Envoi du produit dans le panier
function pushProductInBasket() {
  let numberOfProduct = 1;
  basket.products.push({
    Nom: product.name,
    id: product._id,
    Quantite: numberOfProduct,
  });

  console.log(basket.products.Quantite);
  sendToLocalStorage();
}
/////////////////////

listenButton();
