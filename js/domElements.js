function showError() {
    let getAffElem = document.querySelector("main");
    let div = document.createElement("div");
    div.id = "error";
    div.className = "card col text-center text-light bg-danger";
    div.innerText = "Erreur de connection, merci de revenir plus tard.";
    getAffElem.appendChild(div);
  }
  function creatProductsSection(bootstrapClass){
  let getMain = document.querySelector("main");
  let section = document.createElement("section");
  section.className = bootstrapClass;
  getMain.append(section);
  }
  
  function creatProductDiv(productNumber, colSize, productType) {
    let getSection = document.querySelector("section");
    let div = document.createElement("div");
    div.className = "card" + " " + colSize + " " + productType + productNumber;
    getSection.appendChild(div);
  }
  function showProductImage(productNumber, source) {
    let getTeddyDiv = document.querySelector(".teddy" + productNumber);
    let img = document.createElement("img");
    img.src = source;
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
  function showProductName(productNumber, productName) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerHTML = productName;
    getCardBody.appendChild(h5);
  }
  function showProductDescription(productNumber,productDescription) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = productDescription;
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
  function creatSelect(productNumber) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let select = document.createElement("select");
    select.className = "custom-select browser-default select" + productNumber;
    getCardBody.appendChild(select);
  }
  function CreatFirstSelected(productNumber) {
    let getSelect = document.querySelector(".select" + productNumber);
    let firstOption = document.createElement("option");
    firstOption.className = "selected";
    firstOption.innerText = "Choisissez votre couleur";
    getSelect.appendChild(firstOption);
  }
  function showColorsOptions(productNumber, productColors) {
    let value = 1;
    for (const eachColors of productColors) {
      let getSelect = document.querySelector(".select" + productNumber);
      let colorsOption = document.createElement("option");
      colorsOption.className = "value=" + value;
      colorsOption.innerText = eachColors;
      getSelect.appendChild(colorsOption);
      value++;
    }
  }
  function showPrice(productNumber,) {
    let getCardBody = document.querySelector(".card-body" + productNumber);
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerText = "Prix:" + " " + PriceFormat(product["price"]);
    getCardBody.appendChild(p);
  }
  // Format price
function PriceFormat(price) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }
  function showButton() {
    let getCardBody = document.querySelector(".card-body" + product._id);
    let button = document.createElement("button");
    button.className = "btn btn-primary addToBasket";
    button.innerText = "Ajouter au panier";
    getCardBody.appendChild(button);
  }
  function addScript(scriptPath) {
    let getScript = document.querySelector("body");
    let script = document.createElement("script");
    script.src = scriptPath;
    getScript.appendChild(script);
  }