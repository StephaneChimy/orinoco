function getLocalstorageKey(key) {
  let basket = JSON.parse(localStorage.getItem(key));
  return basket;
}
function checkLocalStorageKey(keyName) {
  var keyFound = false;
  for (key = 0; key < localStorage.length; key++) {
    if (localStorage.key(key) == keyName) {
      console.log("Clé " + keyName + " trouvé");
      keyFound = true;
      return true;
    }
  }
  if (!keyFound) {
    return false;
  }
}
//Price in cents to euros
function centsToEuros(priceInCents){
  let result = priceInCents / 100;
  return result;
}

// Format price
function PriceFormat(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(centsToEuros(price));
}

function clearBasket() {
  let button = document.querySelector("#clear");

  button.addEventListener("click", (e) => {
    //e.preventDefault();
    console.log("Vidage du panier");
    localStorage.removeItem("basket");
    // Reload the page
    window.location.reload();
  });
}
