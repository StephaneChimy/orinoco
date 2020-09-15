var nomOurs;
var idOurs;
var prix;

var getIdInUrl = window.location.search.slice(11);
console.log(getIdInUrl);

let basketToParam = {
  products: [],
};
// var basketToParam = {
//   Nom: "",
//   id: "",
//   Quantite: "",
// };
// console.log(basketToParam);

///////////////
// 1 - Récupérer les éléments à afficher dans une promesse.

function getProducts() {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/teddies/" + getIdInUrl);
    request.send();
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        product = JSON.parse(request.response); //Déclaration de product, pas de let?
        console.log("Récupération des produits OK");
        console.log(product);
        resolve(product);
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
    div.id = "teddy" + product._id;
    idOurs = product._id;
    div.className = "card col-8";
    getAffElem.appendChild(div);
  }
  creatTeddyDiv();

  function setImage() {
    let getTeddyDiv = document.querySelector("#teddy" + product._id);
    let img = document.createElement("img");
    img.src = product["imageUrl"];
    img.className = "image";
    img.className = "card-img-top";
    getTeddyDiv.appendChild(img);
  }
  setImage();

  function newDivCardBody() {
    let getTeddyDiv = document.querySelector("#teddy" + product._id);
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "card-body" + product._id;
    getTeddyDiv.appendChild(div);
  }
  newDivCardBody();

  function setName() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerHTML = product["name"];
    nomOurs = product["name"];
    getCardBody.appendChild(h5);
  }
  setName();

  function setDescription() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = product["description"];
    getCardBody.appendChild(p);
  }
  setDescription();

  function newSelect() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let select = document.createElement("select");
    select.className = "custom-select browser-default";
    select.id = "select" + product._id;
    getCardBody.appendChild(select);
  }
  newSelect();

  function firstSelected() {
    let getSelect = document.querySelector("#select" + product._id);
    let firstOption = document.createElement("option");
    firstOption.className = "selected";
    firstOption.innerText = "Choisissez votre couleur";
    getSelect.appendChild(firstOption);
  }
  firstSelected();

  function setColors() {
    let value = 1;
    for (const eachColors of product["colors"]) {
      let getSelect = document.querySelector("#select" + product._id);
      let colorsOption = document.createElement("option");
      colorsOption.className = "value=" + value;
      colorsOption.innerText = eachColors;
      getSelect.appendChild(colorsOption);
      value++;
    }
  }
  setColors();

  function setPrice() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerText = "Prix:" + " " + product["price"] + "€";
    prix = product["price"];
    getCardBody.appendChild(p);
  }
  setPrice();

  function creatButton() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let button = document.createElement("button");
    button.className = "btn btn-primary addToBasket";
    button.id = "btn" + product._id;
    button.href = "http://127.0.0.1:5500/products.html?" + product._id;
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
          //getParamFromLocalStorage();
          incrementItem();
          function incrementItem() {
            nb = basketToParam.products[item].Quantite;

            //nb = basketToParam;
            console.log(nb);
            nb++;
            basketToParam.products[item].Quantite = nb;
            console.log(basketToParam);

            sendToLocalStorage();
          }
        }
        //console.log(getLocalStorage.products[item].id);
      }
    }
  }
  if (!productFound) {
    console.log(product.name + " n'est pas dans localStorage");
    pushProductInBasket();
  }
}
// function getParamFromLocalStorage() {
//   basketToParam = JSON.parse(localStorage.getItem(localStorage.key(nbItem)));
//   console.log(basketToParam);

//   incrementItem();
// }

// function incrementItem() {
//   let item = maClosure();
//   nb = basketToParam.products[item].Quantite;

//   //nb = basketToParam;
//   console.log(nb);
//   nb++;
//   basketToParam.products[item].Quantite = nb;
//   console.log(basketToParam);

//   sendToLocalStorage();
// }

function sendToLocalStorage() {
  basketToParamJson = JSON.stringify(basketToParam);
  //console.log(basketToParamJson);
  localStorage.setItem("basket", basketToParamJson);
  console.log(JSON.parse(localStorage.getItem("basket")));
}

function pushProductInBasket() {
  //console.log(id);
  let nombreDeProduit = 1;
  basketToParam.products.push({
    Nom: product.name,
    id: product._id,
    Quantite: nombreDeProduit,
  });

  console.log(basketToParam.products.Quantite);
  sendToLocalStorage();
}
/////////////////
getProducts().then((product) => {
  afficherProduit();
  listenButton();
});
