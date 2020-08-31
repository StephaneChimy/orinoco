if(localStorage.length>0){
    function creatTeddyDiv() {
        let getProduct = document.getElementById("affPanier");
        let div = document.createElement("div");
        div.setAttribute("id", "panier");
        div.className = "card col-xs-12 col-sm-5";
        getProduct.appendChild(div);
      }
      creatTeddyDiv();
} else{
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