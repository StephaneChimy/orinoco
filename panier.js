let request = new XMLHttpRequest();
let allProducts;
let totalPrice = 0;
let basket;

checkLocalStorage();
getProducts().then(() => {
  showBasket();
});

function checkLocalStorage() {
  if (localStorage.length < 1) {
    console.log("rien dans le localstorage");
    //pushProductInBasket();
  } else {
    console.log("Au moins une donnée est dans localStorage");
    getParamFromLocalStorage();
  }
}

function getParamFromLocalStorage() {
  //var productFound = false;
  // Vérification si la clé est bien basket
  for (nbItem = 0; nbItem < localStorage.length; nbItem++) {
    if (localStorage.key(nbItem) == "basket") {
      console.log("un item est dans le localstorage");
      // Rapatriement des infos de basket
      basket = JSON.parse(localStorage.getItem(localStorage.key("basket")));

      console.log(basket);
      //Vérification si l'id du produit est dans le localStorage
      // for (let item = 0; item < basketToParam.products.length; item++) {
      //   if (basketToParam.products[item].id == product._id) {
      //     console.log(product.name + " est déjà dans le panier");
      //     productFound = true;
      //     //getParamFromLocalStorage();
      //     //incrementItem();
      //     function incrementItem() {
      //       nb = basketToParam.products[item].Quantite;

      //       //nb = basketToParam;
      //       console.log(nb);
      //       nb++;
      //       basketToParam.products[item].Quantite = nb;
      //       console.log(basketToParam);

      //       //sendToLocalStorage();
      //     }
      //   }
      //   //console.log(getLocalStorage.products[item].id);
      // }
    }
  }
  // if (!productFound) {
  //   console.log("Le produit n'est pas dans localStorage");
  //   //pushProductInBasket();
  // }
}

function getProducts() {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        allProducts = JSON.parse(request.response); //Déclaration de allProducts, pas de let?
        console.log("Récupération des produits OK");
        console.log(allProducts);
        resolve(allProducts);
      } else {
        reject(
          console.log(
            "Un Problème est survenu lors du chargement de la page, merci de revenir plus tard."
          )
        );
      }
    };

    request.onerror = function () {
      alert("erreur de connection, merci de revenir plus tard");
      console.log(
        "Status de la requête: " +
          request.status +
          " | " +
          "ReadyState de la requête: " +
          request.readyState
      );
    };
  });
}

function showBasket() {
  for (
    var nbProductInBasket = 0;
    nbProductInBasket < basket.products.length;
    nbProductInBasket++
  ) {
    addProductToTable(nbProductInBasket);
    addProductNameLigneTable(nbProductInBasket);
    addProductQuantiteLigneTable(nbProductInBasket);
    getPriceOfProduct(nbProductInBasket);
    setPriceOfProduct(nbProductInBasket);
    getTotalPrice(nbProductInBasket);
  }
  setTotalPrice();
}
function addProductToTable(nbProductInBasket) {
  {
    let getLigneProduct = document.querySelector("tbody");
    let creatNewLigne = document.createElement("tr");
    creatNewLigne.id = "tbody" + nbProductInBasket;
    getLigneProduct.appendChild(creatNewLigne);
  }
}
function addProductNameLigneTable(nbProductInBasket) {
  let getLigneProduct = document.querySelector("#tbody" + nbProductInBasket);
  let insertDataOfProduct = document.createElement("td");
  insertDataOfProduct.id = "tdProduct" + nbProductInBasket;
  insertDataOfProduct.innerText = basket.products[nbProductInBasket].Nom;
  getLigneProduct.appendChild(insertDataOfProduct);
}
function addProductQuantiteLigneTable(nbProductInBasket) {
  let getLigneProduct = document.querySelector("#tbody" + nbProductInBasket);
  console.log(getLigneProduct);
  let insertDataOfProduct = document.createElement("td");
  insertDataOfProduct.id = "tdQuantite" + nbProductInBasket;
  insertDataOfProduct.innerText = basket.products[nbProductInBasket].Quantite;
  getLigneProduct.appendChild(insertDataOfProduct);
}
function getPriceOfProduct(nbProductInBasket) {
  for (var nbElem = 0; nbElem < allProducts.length; nbElem++) {
    if (allProducts[nbElem]._id === basket.products[nbProductInBasket].id) {
      PriceOfProduct = allProducts[nbElem].price;
      console.log(
        basket.products[nbProductInBasket].Nom + " = " + PriceOfProduct
      );
    }
  }
}
function setPriceOfProduct(nbProductInBasket) {
  let getLigneProduct = document.querySelector(
    "#tbody" + nbProductInBasket
  );
  console.log(getLigneProduct);
  let insertDataOfProduct = document.createElement("td");
  insertDataOfProduct.id =
    "tdPrice" + nbProductInBasket;
  insertDataOfProduct.innerText = PriceOfProduct;
  getLigneProduct.appendChild(insertDataOfProduct);
}
function getTotalPrice(nbProductInBasket) {
  for (var nbElem = 0; nbElem < allProducts.length; nbElem++) {
    if (allProducts[nbElem]._id === basket.products[nbProductInBasket].id) {
      PriceOfProduct = allProducts[nbElem].price;
      var quantiteOfProduct = basket.products[nbProductInBasket].Quantite;
      totalPrice += PriceOfProduct * quantiteOfProduct;
    }
  }
}
function setTotalPrice() {
  let getTotalPrice = document.querySelector("#Total");
  let insertTotalPrice = document.createElement("th");
  insertTotalPrice.innerHTML = totalPrice; //prix total
  getTotalPrice.appendChild(insertTotalPrice);
}
