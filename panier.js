var request = new XMLHttpRequest();
var allElements;
var nombreElements;
var nbOfItems = localStorage.length;

var panier = [];

//var itemListParse = JSON.stringify(localStorage);

console.log(localStorage);
//console.log(itemListParse);
//console.log(localStorage.length);
request.open("GET", "http://localhost:3000/api/teddies");
request.send();
request.onload = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    allElements = JSON.parse(this.response);
  }

  /* if (localStorage.length > 0) {
    for (var nbItem = 0; nbItem < localStorage.length; nbItem++) {

      function checkPanier() {
        //console.log(panier.length);
        if (panier.length == 0) {
          var singleItem = [];
          let nb = 0;
          singleItem[0] = localStorage.getItem("item" + nbItem);
          singleItem[1] = nb;
          panier.push(singleItem);
        }
      }
      

      function addToPanier() {

        for (const iterator in panier) {
          if (panier[iterator][0] === localStorage.getItem("item" + nbItem)) {
            //console.log("item deja dans le panier");
            nb = panier[iterator][1];
            console.log(nb);
            nb = nb + 1;
            panier.splice([iterator][1],1,localStorage.getItem("item" + nbItem),nb);
          } else {
            console.log("nouvel item");
            //singleItem["id"] = localStorage.getItem("item" + nbItem);
            //singleItem["nb"] = 1;
            //panier.push(singleItem);
          }
        }
      }
      checkPanier();
      addToPanier();
      //console.log(panier[nbItem]);
    }
    console.log(panier); */

    /* for (const j of allElements) {
            var idProduct = localStorage.getItem("item" + nbItem);
            var idSearchOnPage = document.getElementById("item" + nbItem);
            console.log(idSearchOnPage);
             if (j._id === idProduct && idSearchOnPage === null) {
              function creatItem() {
                var idProduct = localStorage.getItem("item" + nbItem);
                let getProduct = document.getElementById("affPanier");
                let div = document.createElement("div");
                div.setAttribute("id", "item" + nbItem);
                div.className = "card col-xs-12 col-sm-12";
                div.innerHTML =
                  "Item : " +
                  j.name +
                  " | id : " +
                  idProduct;
                getProduct.appendChild(div);
                
              }
              creatItem();
    
              function getImage() {
                let getProduct = document.getElementById("item" + nbItem);
                let img = document.createElement("img");
                img.setAttribute("src", j.imageUrl);
                img.className = "image card-img-top img-fluid";
                getProduct.appendChild(img);
              }
              getImage();
            }
          } */
   else {
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
      p.innerHTML = "Votre panier est vide";
      getTeddy.appendChild(p);
    }
    getPanierVide();
  }
};
