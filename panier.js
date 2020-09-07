var request = new XMLHttpRequest();
var allElements;
var nombreElements;
var nbOfItems = localStorage.length;
var basket = [];

//var itemListParse = JSON.stringify(localStorage);

console.log(localStorage);
//console.log(itemListParse);
//console.log(localStorage.length);
request.open("GET", "http://localhost:3000/api/teddies");
request.send();
request.onload = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    allElements = JSON.parse(this.response);

    checkLocalStorage();
    showBasket();
  } else {
    function creatTeddyDiv() {
      let getProduct = document.getElementById("affPanier");
      let div = document.createElement("div");
      div.setAttribute("id", "panier");
      div.className = "card col-xs-12 col-sm-5";
      getProduct.appendChild(div);
    }
    creatTeddyDiv();

    function getPanierVide() {
      const getTeddy = document.getElementById("panier");
      let p = document.createElement("p");
      p.className = "card-text";
      p.innerHTML =
        "Un problème sur le serveur est survenu, merci de revenir plus tard";
      getTeddy.appendChild(p);
    }
    getPanierVide();
  }

  function checkLocalStorage() {
    if (localStorage.length < 1) {
      console.log("rien dans le localstorage");
      console.log("Votre panier est vide");
      //pushProductInBasket();
    } else {
      console.log("Au moins une donnée est dans localStorage");
      //checkParamFromLocalStorage();
      //productControlBeforeBasket();
      getParamFromLocalStorage();
    }
  }
  function getParamFromLocalStorage() {
    for (nbItem = 0; nbItem < localStorage.length; nbItem++) {
      basket.push(JSON.parse(localStorage.getItem(localStorage.key(nbItem))));
      console.log(basket);
    }
    //incrementItem();
  }

  function showBasket() {
    for (
      var nbProductInBasket = 0;
      nbProductInBasket < basket.length;
      nbProductInBasket++
    ) {
      addProductToTable();
      addProductNameLigneTable();
      addProductQuantiteLigneTable();
    }
    function addProductToTable() {
      {
        let getLigneProduct = document.querySelector("tbody");
        let creatNewLigne = document.createElement("tr");
        creatNewLigne.setAttribute("id", basket[nbProductInBasket].Nom);
        getLigneProduct.appendChild(creatNewLigne);
      }
    }

    function addProductNameLigneTable() {
      let getLigneProduct = document.getElementById(
        basket[nbProductInBasket].Nom
      );
      let insertDataOfProduct = document.createElement("td");
      insertDataOfProduct.setAttribute(
        "id",
        "td" + basket[nbProductInBasket].Nom
      );
      insertDataOfProduct.innerText = basket[nbProductInBasket].Nom;
      getLigneProduct.appendChild(insertDataOfProduct);
    }
    function addProductQuantiteLigneTable() {
      let getLigneProduct = document.getElementById(
        basket[nbProductInBasket].Nom
      );
      console.log(getLigneProduct);
      let insertDataOfProduct = document.createElement("td");
      insertDataOfProduct.setAttribute(
        "id",
        "td" + basket[nbProductInBasket].Quantite
      );
      insertDataOfProduct.innerText = basket[nbProductInBasket].Quantite;
      getLigneProduct.appendChild(insertDataOfProduct);
    }

    function addProductPriceLigneTable(){
      
    }
  }
};
