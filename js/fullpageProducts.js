////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function showError() {
  let getAffElem = document.querySelector("main");
  let div = document.createElement("div");
  div.id = "error";
  div.className = "card col text-center text-light bg-danger";
  div.innerText = "Erreur de connection, merci de revenir plus tard.";
  getAffElem.appendChild(div);
}

function creatTeddyDiv(product) {
  let getAffProduct = document.querySelector("main");
  let div = document.createElement("div");
  div.id = "teddy" + product;
  div.className = "card col-12";
  getAffProduct.appendChild(div);
}
function showImage(product) {
  let getTeddyDiv = document.querySelector("#teddy" + product);
  let img = document.createElement("img");
  img.src = products[product].imageUrl;
  img.className = "image card-img-top img-fluid";
  getTeddyDiv.appendChild(img);
}
function CreatDivCardBody(product) {
  let getTeddyDiv = document.querySelector("#teddy" + product);
  let div = document.createElement("div");
  div.className = "card-body";
  div.id = "card-body" + product;
  getTeddyDiv.appendChild(div);
}
function showName(product) {
  let getCardBody = document.querySelector("#card-body" + product);
  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerHTML = products[product].name;
  getCardBody.appendChild(h5);
}
function showDescription(product) {
  let getCardBody = document.querySelector("#card-body" + product);
  let p = document.createElement("p");
  p.className = "card-text";
  p.innerHTML = products[product].description;
  getCardBody.appendChild(p);
}
function showPrice(product) {
  let getCardBody = document.querySelector("#card-body" + product);
  let p = document.createElement("p");
  p.className = "card-text";
  p.innerHTML = "Prix:" + " " + PriceFormat(products[product].price);
  getCardBody.appendChild(p);
}
function showButton(product) {
  let getCardBody = document.querySelector("#card-body" + product);
  let a = document.createElement("a");
  a.className = "btn btn-primary";
  a.href = "/product.html?ProductId=" + products[product]._id;
  a.innerText = "Détail";
  getCardBody.appendChild(a);
}
// Format price
function PriceFormat(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

// showElements = Create a bootstrap card for each product in products
function showElements() {
  for (var product = 0; product < products.length; product++) {
    creatTeddyDiv(product);
    showImage(product);
    CreatDivCardBody(product);
    showName(product);
    showDescription(product);
    showPrice(product);
    showButton(product);
  }
}

////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

getProducts("http://localhost:3000/api","teddies").then(function () {
  showElements();
});
