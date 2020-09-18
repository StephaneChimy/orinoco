////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

// Get elements to show in a promise.

function getProducts() {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        allProducts = JSON.parse(request.response);
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
      showError();
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

function showError() {
  let getAffElem = document.querySelector("#affProduct");
  let div = document.createElement("div");
  div.id = "error";
  div.className = "card col text-center text-light bg-danger";
  div.innerText = "Erreur de connection, merci de revenir plus tard.";
  getAffElem.appendChild(div);
}

function creatTeddyDiv(product) {
  let getAffProduct = document.querySelector("#affProduct");
  let div = document.createElement("div");
  div.id = "teddy" + product;
  div.className = "card col-12";
  getAffProduct.appendChild(div);
}
function showImage(product) {
  let getTeddyDiv = document.querySelector("#teddy" + product);
  let img = document.createElement("img");
  img.src = allProducts[product].imageUrl;
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
  h5.innerHTML = allProducts[product].name;
  getCardBody.appendChild(h5);
}
function showDescription(product) {
  let getCardBody = document.querySelector("#card-body" + product);
  let p = document.createElement("p");
  p.className = "card-text";
  p.innerHTML = allProducts[product].description;
  getCardBody.appendChild(p);
}
function showPrice(product) {
  let getCardBody = document.querySelector("#card-body" + product);
  let p = document.createElement("p");
  p.className = "card-text";
  p.innerHTML = "Prix:" + " " + PriceFormat(allProducts[product].price);
  getCardBody.appendChild(p);
}
function showButton(product) {
  let getCardBody = document.querySelector("#card-body" + product);
  let a = document.createElement("a");
  a.className = "btn btn-primary";
  a.href = "/product.html?ProductId=" + allProducts[product]._id;
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

// showElements = Create a bootstrap card for each product in allProducts
function showElements() {
  for (var product = 0; product < allProducts.length; product++) {
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

getProducts().then(function () {
  showElements();
});
