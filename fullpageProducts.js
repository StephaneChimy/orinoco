// 1 - Récupérer les éléments à afficher dans une promesse.

function getProducts() {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        allProducts = JSON.parse(request.response); //Déclaration de allProducts, pas de let?
        console.log("Récupération des produits OK");
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

getProducts().then((allProducts) => {
  showElements();
});

// 2 - Création d'une div pour chaque produit dans l'objet allProduct

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
