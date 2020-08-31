nbOfItems = localStorage.length;
console.log(localStorage.length);
if (localStorage.length > 0) {

    for(let nbItem = 0; nbItem < localStorage.length; nbItem++){
        
        function creatTeddyDiv() {
            let getProduct = document.getElementById("affPanier");
            let div = document.createElement("div");
            div.setAttribute("id", "item" + nbItem);
            div.className = "card col-xs-12 col-sm-12";
            div.innerHTML =
              "Vous avez " + localStorage.length + " items dans votre panier";
            getProduct.appendChild(div);
          }
          creatTeddyDiv();
    };
  
} else {
  function creatTeddyDiv() {
    let getProduct = document.getElementById("affPanier");
    let div = document.createElement("div");
    div.setAttribute("id", "panier");
    div.className = "card col-xs-12 col-sm-5";
    getProduct.appendChild(div);
  }
  creatTeddyDiv();

  function getPanierVide() {
    const getTeddy = document.getElementById("panier");
    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = "Votre panier est vide";
    getTeddy.appendChild(p);
  }
  getPanierVide();
}