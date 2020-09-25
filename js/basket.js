////////////////////////////////////////////// Variables //////////////////////////////////////////////
////////////////////////////////////////////// Fonction //////////////////////////////////////////////

function checkLocalStorage() {
  if (localStorage.length == 0) {
    console.log("rien dans le localstorage");
    emptyBasket();
    return false;
  } else {
    console.log("Au moins une donnée est dans localStorage");
    //getParamFromLocalStorage();
    return true;
  }
}

function getParamFromLocalStorage() {
  var cleFound = false;
  for (cle = 0; cle < localStorage.length; cle++) {
    if (localStorage.key(cle) == "basket") {
      console.log("un item est dans le localstorage");
      // Rapatriement des infos de basket
      basket = JSON.parse(localStorage.getItem(localStorage.key(cle)));
      console.log(basket);
      cleFound = true;
      return true;
    }
  }
  if (!cleFound) {
    emptyBasket();
    return false;
  }
}

function showErrorConnection() {
  let getShowBasket = document.querySelector("#showBasket");
  getShowBasket.style.display = "none";
  let getShowForm = document.querySelector("#showForm");
  getShowForm.style.display = "none";
  let geMain = document.querySelector("main");
  let div = document.createElement("div");
  div.id = "error";
  div.className = "card col text-center text-light bg-danger";
  div.innerText = "Erreur de connection, merci de revenir plus tard.";
  geMain.appendChild(div);
}
function emptyBasket() {
  let getShowBasket = document.querySelector("#showBasket");
  getShowBasket.style.display = "none";
  let getShowForm = document.querySelector("#showForm");
  getShowForm.style.display = "none";
  let geMain = document.querySelector("main");
  let div = document.createElement("div");
  div.id = "error";
  div.className = "card col text-center text-info mx-auto";
  div.innerText = "Votre panier est vide.";
  geMain.appendChild(div);
}

function addProductToTable(product) {
  {
    let getLigneProduct = document.querySelector("tbody");
    let creatNewLigne = document.createElement("tr");
    creatNewLigne.id = "tbody" + product;
    getLigneProduct.appendChild(creatNewLigne);
  }
}
function addProductNameLigneTable(product) {
  let getLigneProduct = document.querySelector("#tbody" + product);
  let insertDataOfProduct = document.createElement("td");
  insertDataOfProduct.id = "tdProduct" + product;
  insertDataOfProduct.innerText = basket.products[product].Nom;
  getLigneProduct.appendChild(insertDataOfProduct);
}
function addProductQuantiteLigneTable(product) {
  let getLigneProduct = document.querySelector("#tbody" + product);
  console.log(getLigneProduct);
  let insertDataOfProduct = document.createElement("td");
  insertDataOfProduct.id = "tdQuantite" + product;
  insertDataOfProduct.innerText = basket.products[product].Quantite;
  getLigneProduct.appendChild(insertDataOfProduct);
}
function getPriceOfProduct(product) {
  for (nbElem = 0; nbElem < products.length; nbElem++) {
    if (products[nbElem]._id === basket.products[product].id) {
      PriceOfProduct = products[nbElem].price;
      console.log(basket.products[product].Nom + " = " + PriceOfProduct);
      return PriceOfProduct;
    }
  }
}
function setPriceOfProduct(product) {
  let getLigneProduct = document.querySelector("#tbody" + product);
  let insertDataOfProduct = document.createElement("td");
  insertDataOfProduct.id = "tdPrice" + product;
  insertDataOfProduct.innerText = PriceFormat(getPriceOfProduct(product));
  getLigneProduct.appendChild(insertDataOfProduct);
}

function getTotalPrice() {
  let totalPrice = 0;
  for (let product = 0; product < basket.products.length; product++) {
    for (var nbElem = 0; nbElem < products.length; nbElem++) {
      if (products[nbElem]._id === basket.products[product].id) {
        PriceOfProduct = products[nbElem].price;
        var quantiteOfProduct = basket.products[product].Quantite;
        totalPrice += PriceOfProduct * quantiteOfProduct;
      }
    }
  }
  return totalPrice;
}
function setTotalPrice(totalPrice) {
  let getTotalPrice = document.querySelector("#Total");
  let insertTotalPrice = document.createElement("th");
  insertTotalPrice.innerText = PriceFormat(totalPrice);
  getTotalPrice.appendChild(insertTotalPrice);
}
function setClearButton() {
  let getTotalPrice = document.querySelector("#Total");
  let button = document.createElement("th");
  button.id = "clear";
  button.className = "btn btn-outline-secondary";
  button.innerText = "x";
  getTotalPrice.appendChild(button);
}

function showBasket() {
  for (let product = 0; product < basket.products.length; product++) {
    addProductToTable(product);
    addProductNameLigneTable(product);
    addProductQuantiteLigneTable(product);
    getPriceOfProduct(product);
    setPriceOfProduct(product);
    getTotalPrice();
  }
  setTotalPrice(getTotalPrice());
  setClearButton();
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

////////////////////////////////////////////// Exection of the script //////////////////////////////////////////////

if (checkLocalStorage() === true && getParamFromLocalStorage() === true) {
  console.log("Verification passée");
  getProducts("http://localhost:3000/api", "teddies")
    .then(() => {
      showBasket();
    })
    .then(() => {
      clearBasket();
    });
}
