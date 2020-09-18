let basketTemp;

function checkLocalStorage() {
    if (localStorage.length == 0) {
      console.log("rien dans le localstorage");
      showBadges("");
      return false;
    } else {
      console.log("Au moins une donnée est dans localStorage");
      getParamFromLocalStorage();
      return true;
    }
  }
  
  function getParamFromLocalStorage() {
  var cleFound = false;
    for (cle = 0; cle < localStorage.length; cle++) {
      if (localStorage.key(cle) == "basket") {
        console.log("un item est dans le localstorage");
        // Rapatriement des infos de basket
        basketTemp = JSON.parse(localStorage.getItem(localStorage.key(cle)));
        console.log(basketTemp);
        cleFound = true;
        showBadges(getQuantityOfProducts())
        return true;
      } 
    }
    if (!cleFound){
        showBadges("");
      return false;
    }
  }
function getQuantityOfProducts() {
  let quantite = 0;
  let quantiteOfProducts = 0;
  for (var product = 0; product < basketTemp.products.length; product++) {
    quantite = basketTemp.products[product].Quantite;
    quantiteOfProducts += quantite;
  }
  return quantiteOfProducts;
}

function showBadges(products) {
  let badgesSpan = document.querySelector(".badge");
  badgesSpan.textContent = products;
}
if (config.badgesEnabled) {
  getParamFromLocalStorage();
  console.log("Écriture des badges");
}
