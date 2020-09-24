////////////////////////////////////////////// Variables //////////////////////////////////////////////
let basket = {
  products: [],
};
let productId = window.location.search.slice(11);
////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function showError() {
  let getMain = document.querySelector("#main");
  let div = document.createElement("div");
  div.id = "error";
  div.className = "card col text-center text-light bg-danger";
  div.innerText = "Erreur de connection, merci de revenir plus tard.";
  getMain.appendChild(div);
}

function showCardProduct() {
  function creatCardTeddySection() {
    let getMain = document.querySelector("main");
    let section = document.createElement("section");
    section.className = "row justify-content-around";
    getMain.append(section);
  }
  creatCardTeddySection();
  function creatCardTeddyDiv() {
    let getSection = document.querySelector("section");
    let div = document.createElement("div");
    div.id = "teddy" + product._id;
    div.className = "card col-8";
    getSection.appendChild(div);
  }
  creatCardTeddyDiv();

  function showCardImage() {
    let getTeddyDiv = document.querySelector("#teddy" + product._id);
    let img = document.createElement("img");
    img.src = product["imageUrl"];
    img.className = "image";
    img.className = "card-img-top";
    getTeddyDiv.appendChild(img);
  }
  showCardImage();

  function CreatDivCardBody() {
    let getTeddyDiv = document.querySelector("#teddy" + product._id);
    let div = document.createElement("div");
    div.className = "card-body";
    div.id = "card-body" + product._id;
    getTeddyDiv.appendChild(div);
  }
  CreatDivCardBody();

  function showName() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerHTML = product["name"];
    getCardBody.appendChild(h5);
  }
  showName();

  function showDescription() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = product["description"];
    getCardBody.appendChild(p);
  }
  showDescription();

  function creatSelect() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let select = document.createElement("select");
    select.className = "custom-select browser-default";
    select.id = "select" + product._id;
    getCardBody.appendChild(select);
  }
  creatSelect();

  function CreatFirstSelected() {
    let getSelect = document.querySelector("#select" + product._id);
    let firstOption = document.createElement("option");
    firstOption.className = "selected";
    firstOption.innerText = "Choisissez votre couleur";
    getSelect.appendChild(firstOption);
  }
  CreatFirstSelected();

  function showColors() {
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
  showColors();

  function showPrice() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerText = "Prix:" + " " + PriceFormat(product["price"]);
    getCardBody.appendChild(p);
  }
  showPrice();

  function showButton() {
    let getCardBody = document.querySelector("#card-body" + product._id);
    let button = document.createElement("button");
    button.className = "btn btn-primary addToBasket";
    button.id = "btn" + product._id;
    button.href = "http://127.0.0.1:5500/products.html?" + product._id;
    button.innerText = "Ajouter au panier";
    getCardBody.appendChild(button);
  }

  // Format price
  function PriceFormat(price) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  }
  showButton();
  // Add the script after creating all elements on the page.
  function showScriptIntoBasket() {
    let getScript = document.querySelector("body");
    let script = document.createElement("script");
    script.src = "./js/intoBasket.js";
    getScript.appendChild(script);
  }
  showScriptIntoBasket();
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

getProduct("http://localhost:3000/api", "teddies", productId).then(function () {
  showCardProduct();
});
