function showError() {
    let getAffElem = document.querySelector("main");
    let div = document.createElement("div");
    div.id = "error";
    div.className = "card col text-center text-light bg-danger";
    div.innerText = "Erreur de connection, merci de revenir plus tard.";
    getAffElem.appendChild(div);
  }
  function creatProductsSection(){
  let getMain = document.querySelector("main");
  let section = document.createElement("section");
  section.className = "row justify-content-between mx-auto";
  getMain.append(section);
  }
  
  function creatProductDiv(productNumber, colSize, productType) {
    let getSection = document.querySelector("section");
    let div = document.createElement("div");
    div.className = "card" + " " + colSize + " " + productType + productNumber;
    getSection.appendChild(div);
  }
  function showProductImage(productNumber) {
    let getTeddyDiv = document.querySelector(".teddy" + productNumber);
    let img = document.createElement("img");
    img.src = products[productNumber].imageUrl;
    img.className = "image card-img-top img-fluid";
    getTeddyDiv.appendChild(img);
  }
  function CreatDivCardBody(productNumber) {
    let getTeddyDiv = document.querySelector(".teddy" + productNumber);
    let div = document.createElement("div");
    div.className = "card-body" + productNumber;
    // div.id = "card-body" + product;
    getTeddyDiv.appendChild(div);
  }
  function showProductName(productNumber) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerHTML = products[productNumber].name;
    getCardBody.appendChild(h5);
  }
  function showProductDescription(productNumber) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = products[productNumber].description;
    getCardBody.appendChild(p);
  }
  function showProductPrice(productNumber) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = "Prix:" + " " + PriceFormat(products[productNumber].price);
    getCardBody.appendChild(p);
  }
  function showProductButton(productNumber) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    a.href = "/product.html?ProductId=" + products[productNumber]._id;
    a.innerText = "Détail";
    getCardBody.appendChild(a);
  }