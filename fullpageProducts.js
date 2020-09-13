// 1 - Récupérer les éléments à afficher

let allProducts;
let numberOfProducts;

function getProducts() {
  let request = new XMLHttpRequest();

  // Récupération des éléments à afficher avec une requête get
  request.open("GET", "http://localhost:3000/api/teddies");
  request.send();

  request.onload = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      allProducts = JSON.parse(this.response);
      numberOfProducts = allProducts.length;

      if (numberOfProducts > 0) {
        showElements();
      } else {
        alert("Aucun produit n'est disponible pour le moment.");
      }
    } else {
      alert("Un problème est survenu, merci de revenir plus tard.");
    }
  };
}

getProducts();

// Création d'une div affichant le tableau
//document.body.onload = showElement;
function showElements() {
  for (var i = 0; i < allProducts.length; i++) {
    function creatTeddyDiv() {
      let getProduct = document.querySelector("#affProduct");
      let div = document.createElement("div");
      div.setAttribute("id", "teddy" + i);
      div.className = "card col-xs-12 col-sm-5";
      getProduct.appendChild(div);
    }

    function populateTeddyDiv() {
      function getImage() {
        const getTeddy = document.getElementById("teddy" + i);
        let img = document.createElement("img");
        img.setAttribute("src", allProducts[i].imageUrl);
        img.className = "image card-img-top img-fluid";
        getTeddy.appendChild(img);
      }
      getImage();

      function newDiv() {
        const getTeddy = document.getElementById("teddy" + i);
        let div = document.createElement("div");
        div.className = "card-body";
        div.setAttribute("id", "card-body" + i);
        getTeddy.appendChild(div);
      }
      newDiv();

      function getName() {
        const getTeddy = document.getElementById("card-body" + i);
        let div = document.createElement("h5");
        div.className = "card-title";
        div.innerHTML = allProducts[i].name;
        getTeddy.appendChild(div);
      }
      getName();

      function getDescription() {
        const getTeddy = document.getElementById("card-body" + i);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = allProducts[i].description;
        getTeddy.appendChild(div);
      }
      getDescription();

      function getPrice() {
        const getTeddy = document.getElementById("card-body" + i);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = "Prix:" + " " + allProducts[i].price + "€";
        getTeddy.appendChild(div);
      }
      getPrice();

      function creatButton() {
        const getTeddy = document.getElementById("card-body" + i);
        let div = document.createElement("a");
        div.className = "btn btn-primary";
        //A changer
        div.setAttribute("href", "/product.html?" + allProducts[i]._id);
        div.innerText = "Détail";
        getTeddy.appendChild(div);
      }
      creatButton();
    }
    creatTeddyDiv();
    populateTeddyDiv();
  }
}
