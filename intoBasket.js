function listenButton() {
  var getButton = document.querySelector(".addToBasket");
  console.log(getButton);
  getButton.addEventListener("click", () => {
    console.log("Button cliqué");

    checkLocalStorage();

    console.log(localStorage);
  });
}

function checkLocalStorage() {
  if (localStorage.length < 1) {
    console.log("rien dans le localstorage");
    pushProductInBasket();
  } else {
    console.log("Au moins une donnée est dans localStorage");
    checkParamFromLocalStorage();
  }
}

function checkParamFromLocalStorage() {
  var productFound = false;
  // Vérification si la clé est bien basket
  for (nbItem = 0; nbItem < localStorage.length; nbItem++) {
    if (localStorage.key(nbItem) == "basket") {
      console.log("un item est déjà dans le localstorage");
      // Rapatriement des infos de basket
      basketToParam = JSON.parse(
        localStorage.getItem(localStorage.key("basket"))
      );

      console.log(basketToParam);
      //Vérification si l'id du produit est dans le localStorage
      for (let item = 0; item < basketToParam.products.length; item++) {
        if (basketToParam.products[item].id == product._id) {
          console.log(product.name + " est déjà dans le panier");
          productFound = true;
          incrementItem();
          function incrementItem() {
            nb = basketToParam.products[item].Quantite;

            console.log(nb);
            nb++;
            basketToParam.products[item].Quantite = nb;
            console.log(basketToParam);

            sendToLocalStorage();
          }
        }
      }
    }
  }
  if (!productFound) {
    console.log(product.name + " n'est pas dans localStorage");
    pushProductInBasket();
  }
}

function sendToLocalStorage() {
  basketToParamJson = JSON.stringify(basketToParam);
  localStorage.setItem("basket", basketToParamJson);
  console.log(JSON.parse(localStorage.getItem("basket")));
}

function pushProductInBasket() {
  let nombreDeProduit = 1;
  basketToParam.products.push({
    Nom: product.name,
    id: product._id,
    Quantite: nombreDeProduit,
  });

  console.log(basketToParam.products.Quantite);
  sendToLocalStorage();
}
listenButton();
