
let basketToParam = {
  products: [],
};

///////////////
// 1 - Récupérer les éléments à afficher dans une promesse.

function getProducts() {
  return new Promise((resolve, reject) => {
    let getIdInUrl = window.location.search.slice(11);
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
function showProduct() {
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
  // rajout du script pour le bon chargement de la page.
  function creatScriptIntoBasket(){
    let getScript = document.querySelector("body");
    let script = document.createElement("script");
    script.src = "./intoBasket.js";
    getScript.appendChild(script);
  }
  creatScriptIntoBasket();
}
////////////////////////////////////////////


getProducts().then((product) => {
  showProduct();
});
