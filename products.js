var request = new XMLHttpRequest();
var allElements;
var nombreElements;
var nomOurs;
var idOurs;
var prix;

var getIdInUrl = window.location.search.slice(1);
var basketToParam = [];

///////////////
request.open("GET", "http://localhost:3000/api/teddies");
request.send();
request.onload = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    allElements = JSON.parse(this.response);
    //console.log(allElements);
    //console.log(allElements.length);
    // Ajout du nombre d'éléments à afficher dans une variable nombreElements
    nombreElements = allElements.length;
    // Control si aucun élément n'est à afficher
    console.log(nombreElements);
    // Creation des elements à afficher
    afficherProduit();
  } else {
    alert("Un problème est survenu, merci de revenir plus tard.");
  }
};
//////////////////////////////////

//////////////////////////////////

//////////////////////////////////
function afficherProduit() {
  for (const j of allElements) {
    if (j._id === getIdInUrl) {
      function creatTeddyDiv() {
        let getAffElem = document.getElementById("affProduct");
        let div = document.createElement("div");
        div.setAttribute("id", "teddy" + j._id);
        idOurs = j._id;
        div.className = "card col-8";
        getAffElem.appendChild(div);
      }
      creatTeddyDiv();

      function getImage() {
        const getTeddy = document.getElementById("teddy" + j._id);
        let img = document.createElement("img");
        img.setAttribute("src", j.imageUrl);
        img.className = "image";
        img.className = "card-img-top";
        getTeddy.appendChild(img);
      }
      getImage();

      function newDiv() {
        const getTeddy = document.getElementById("teddy" + j._id);
        let div = document.createElement("div");
        div.className = "card-body";
        div.setAttribute("id", "card-body" + j._id);
        getTeddy.appendChild(div);
      }
      newDiv();

      function getName() {
        const getTeddy = document.getElementById("card-body" + j._id);
        let div = document.createElement("h5");
        div.className = "card-title";
        div.innerHTML = j.name;
        nomOurs = j.name;
        getTeddy.appendChild(div);
      }
      getName();

      function getDescription() {
        const getTeddy = document.getElementById("card-body" + j._id);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = j.description;
        getTeddy.appendChild(div);
      }
      getDescription();

      function newUl() {
        const getTeddy = document.getElementById("card-body" + j._id);
        let ul = document.createElement("ul");
        ul.className = "card-body list-group";
        ul.setAttribute("id", "list-group" + j._id);
        getTeddy.appendChild(ul);
      }
      newUl();

      for (const eachColors of j.colors) {
        function getColors() {
          const getTeddy = document.getElementById("list-group" + j._id);
          let li = document.createElement("li");
          li.className = "list-group-item";
          li.innerHTML = eachColors;
          getTeddy.appendChild(li);
        }
        getColors();
      }

      function getPrice() {
        const getTeddy = document.getElementById("card-body" + j._id);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = "Prix:" + " " + j.price + "€";
        prix = j.price;
        getTeddy.appendChild(div);
      }
      getPrice();

      function creatButton() {
        const getTeddy = document.getElementById("card-body" + j._id);
        let div = document.createElement("button");
        div.className = "btn btn-primary addToBasket";
        div.setAttribute("id", "btn" + j._id);
        div.setAttribute(
          "href",
          "http://127.0.0.1:5500/products.html?" + j._id
        );
        div.innerText = "Ajouter au panier";
        getTeddy.appendChild(div);
      }
      creatButton();
    }

    //console.log(j._id);
  }
  console.log(nomOurs);

  function listenButton() {
    var getButton = document.querySelector(".addToBasket");
    console.log(getButton);
    getButton.addEventListener("click", () => {
      //localStorage.setItem("item" + localStorage.length, getIdInUrl);
      console.log("Button cliqué");

      checkLocalStorage();

      //console.log(basketToParam);
      console.log(localStorage);
    });
  }

  function checkLocalStorage() {
    if (localStorage.length < 1) {
      console.log("rien dans le localstorage");
      getProductInBasket();
    } else {
      console.log("Au moins une donnée est dans localStorage");
      checkParamFromLocalStorage();
      //productControlBeforeBasket();
    }
  }

  function checkParamFromLocalStorage() {
    for (nbItem = 0; nbItem < localStorage.length; nbItem++) {
      if (nomOurs === localStorage.key(nbItem)) {
        console.log(
          "un " + localStorage.key(nbItem) + " est déjà dans le localstorage"
        );
        console.log(basketToParam);

        getParamFromLocalStorage();
      } else {
        console.log(nomOurs + " n'est pas dans localStorage");
        getProductInBasket();
      }
    }
  }
  function getParamFromLocalStorage() {
    basketToParam = JSON.parse(localStorage.getItem(localStorage.key(nbItem)));
    console.log(basketToParam);

    incrementItem();
  }

  function incrementItem() {
    console.log(basketToParam);
    nb = basketToParam[1];
    console.log(nb);
    nb++;
    basketToParam.splice(1, 1, nb);
    console.log(basketToParam);

    sendToLocalStorage();
  }

  function sendToLocalStorage() {
    basketToParamJson = JSON.stringify(basketToParam);
    //console.log(basketToParamJson);
    localStorage.setItem(nomOurs, basketToParamJson);
    console.log(localStorage.getItem(nomOurs));
  }

  function getProductInBasket() {
    //console.log(id);
    let nombreDeProduit = 1;
    basketToParam = [idOurs, nombreDeProduit, prix];
    sendToLocalStorage();
  }
  listenButton();
}
