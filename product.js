var nomOurs;
var idOurs;
var prix;

var getIdInUrl = window.location.search.slice(11);
console.log(getIdInUrl);

var basketToParam = {
  Nom: "",
  id: "",
  Quantite: "",
};
console.log(basketToParam);

///////////////
// 1 - Récupérer les éléments à afficher dans une promesse.

function getProducts() {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/teddies/" + getIdInUrl);
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

//////////////////////////////////
function afficherProduit() {
  function creatTeddyDiv() {
    let getAffElem = document.querySelector("#affProduct");
    let div = document.createElement("div");
    div.id = "teddy" + allProducts["_id"];
    idOurs = allProducts["_id"];
    div.className = "card col-8";
    getAffElem.appendChild(div);
  }
  creatTeddyDiv();

  function setImage() {
    const getTeddyDiv = document.querySelector("#teddy" + allProducts["_id"]);
    let img = document.createElement("img");
    img.src = allProducts["imageUrl"];
    img.className = "image";
    img.className = "card-img-top";
    getTeddyDiv.appendChild(img);
  }
  setImage();

  function newDivCardBody() {
    let getTeddyDiv = document.querySelector("#teddy" + allProducts["_id"]);
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "card-body" + allProducts["_id"];
    getTeddyDiv.appendChild(div);
  }
  newDivCardBody();

  function setName() {
    let getCardBody = document.querySelector("#card-body" + allProducts["_id"]);
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerHTML = allProducts["name"];
    nomOurs = allProducts["name"];
    getCardBody.appendChild(h5);
  }
  setName();

  function setDescription() {
    let getCardBody = document.querySelector("#card-body" + allProducts["_id"]);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = allProducts["description"];
    getCardBody.appendChild(p);
  }
  setDescription();

  function newSelect() {
    let getCardBody = document.querySelector("#card-body" + allProducts["_id"]);
    let select = document.createElement("select");
    select.className = "custom-select browser-default";
    select.id = "select" + allProducts["_id"];
    getCardBody.appendChild(select);
  }
  newSelect();

  function firstSelected() {
    let getSelect = document.querySelector("#select" + allProducts["_id"]);
    let firstOption = document.createElement("option");
    firstOption.className = "selected";
    firstOption.innerText = "Choisissez votre couleur";
    getSelect.appendChild(firstOption);
  }
  firstSelected();

  function setColors() {
    let value = 1;
    for (const eachColors of allProducts["colors"]) {
      let getSelect = document.querySelector("#select" + allProducts["_id"]);
      let colorsOption = document.createElement("option");
      colorsOption.className = "value=" + value;
      colorsOption.innerText = eachColors;
      getSelect.appendChild(colorsOption);
      value++;
    }
  }
  setColors();

  function setPrice() {
    let getCardBody = document.querySelector("#card-body" + allProducts["_id"]);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerText = "Prix:" + " " + allProducts["price"] + "€";
    prix = allProducts["price"];
    getCardBody.appendChild(p);
  }
  setPrice();

  function creatButton() {
    let getCardBody = document.querySelector("#card-body" + allProducts["_id"]);
    let button = document.createElement("button");
    button.className = "btn btn-primary addToBasket";
    button.id = "btn" + allProducts["_id"];
    button.href = "http://127.0.0.1:5500/products.html?" + allProducts["_id"];
    button.innerText = "Ajouter au panier";
    getCardBody.appendChild(button);
  }
  creatButton();
}
////////////////////////////////////////////
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
    pushProductInBasket();
  } else {
    console.log("Au moins une donnée est dans localStorage");
    checkParamFromLocalStorage();
    //productControlBeforeBasket();
  }
}

function checkParamFromLocalStorage() {
  var productFound = false;

  for (nbItem = 0; nbItem < localStorage.length; nbItem++) {
    if (nomOurs === localStorage.key(nbItem)) {
      console.log(
        "un " + localStorage.key(nbItem) + " est déjà dans le localstorage"
      );
      //console.log(basketToParam);
      productFound = true;
      getParamFromLocalStorage();
    }
  }
  if (!productFound) {
    console.log(nomOurs + " n'est pas dans localStorage");
    pushProductInBasket();
  }
}
function getParamFromLocalStorage() {
  basketToParam = JSON.parse(localStorage.getItem(localStorage.key(nbItem)));
  console.log(basketToParam);

  incrementItem();
}

function incrementItem() {
  console.log(basketToParam);

  nb = basketToParam["Quantite"];

  //nb = basketToParam;
  console.log(nb);
  nb++;
  basketToParam["Quantite"] = nb;
  console.log(basketToParam);

  sendToLocalStorage();
}

function sendToLocalStorage() {
  basketToParamJson = JSON.stringify(basketToParam);
  //console.log(basketToParamJson);
  localStorage.setItem(nomOurs, basketToParamJson);
  console.log(localStorage.getItem(nomOurs));
}

function pushProductInBasket() {
  //console.log(id);
  let nombreDeProduit = 1;
  basketToParam = {
    Nom: nomOurs,
    id: idOurs,
    Quantite: nombreDeProduit,
  };
  sendToLocalStorage();
}
/////////////////
getProducts().then((allProducts) => {
  afficherProduit();
  listenButton();
});
