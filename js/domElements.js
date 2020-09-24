function showError() {
    let getAffElem = document.querySelector("main");
    let div = document.createElement("div");
    div.id = "error";
    div.className = "card col text-center text-light bg-danger";
    div.innerText = "Erreur de connection, merci de revenir plus tard.";
    getAffElem.appendChild(div);
  }
  function creatTeddySection(){
  let getMain = document.querySelector("main");
  let section = document.createElement("section");
  section.className = "row justify-content-between mx-auto";
  getMain.append(section);
  }
  
  function creatTeddyDiv(product) {
    let getSection = document.querySelector("section");
    let div = document.createElement("div");
    div.id = "teddy" + product;
    div.className = "card col-12";
    getSection.appendChild(div);
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