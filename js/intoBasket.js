////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

listenButton();

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// 1 - Listen button / If clicked => Fonction pushProductInBasket() & showBadges()
function listenButton() {
  var getButton = document.querySelector(".addToBasket");
  console.log(getButton);
  getButton.addEventListener("click", () => {
    pushProductInBasket(beingWatchedProduct);
    showBadges();
  });
}

function pushProductInBasket(beingWatchedProduct) {
  // Check if the key basket exist in the localstorage
  if (checkLocalStorageKey("basket")) {
    basket = getLocalstorageKey("basket");
    console.log("Des produits sont déjà dans le panier");
    // Check if the product id of the curent page is in the basket
    if (checkProductIdInBasket(basket, beingWatchedProduct._id)) {
      console.log("Le produit est déjà dans le panier");
      // Increment the quantity of the product in the basket
      incrementProductInBasket(
        getIndexOfProductInBasket(basket, beingWatchedProduct._id)
      ); // retourne l'index du produit trouvé dans le panier
      console.log(basket);
      // Then send it to the localStorage
      sendBasketToLocalStorage(basket);
    } else {
      console.log("Le produit n'est pas dans le panier");
      // Push the product in the basket
      pushNewProductInBasket(beingWatchedProduct, basket);
      // Then send the basket to the localStorage
      sendBasketToLocalStorage(basket);
    }
  } else {
    // If the key basket doesn't exist in the localstorage
    // Initialisation of the basket
    let basket = {
      products: [],
    };
    // Push the product in the basket
    pushNewProductInBasket(beingWatchedProduct, basket);
    // Then send the basket to the localStorage
    sendBasketToLocalStorage(basket);
  }
}

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
    return false;
  }
}

function getIndexOfProductInBasket(basket, productId) {
  var indexOfProduct = null;
  for (let index = 0; index < basket.products.length; index++) {
    if (basket.products[index].id == productId) {
      console.log("Index du produit trouvé = " + index);
      indexOfProduct = index;
      return indexOfProduct;
    }
  }
}

function incrementProductInBasket(index) {
  basket.products[index].quantity += 1;
}

function pushNewProductInBasket(product, basket) {
  let numberOfProduct = 1;
  basket.products.push({
    name: product.name,
    id: product._id,
    quantity: numberOfProduct,
  });
}

function sendBasketToLocalStorage(basket) {
  basketJsoned = JSON.stringify(basket);
  localStorage.setItem("basket", basketJsoned);
  console.log(JSON.parse(localStorage.getItem("basket")));
}
