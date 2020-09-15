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

// 2 - showElements = Création d'une card type bootstrap pour chaque produit dans l'objet allProduct

function showElements() {
  for (var i = 0; i < allProducts.length; i++) {
    function creatTeddyDiv() {
      let getAffProduct = document.querySelector("#affProduct");
      let div = document.createElement("div");
      div.id = "teddy" + i;
      div.className = "card col-xs-12 col-sm-5";
      getAffProduct.appendChild(div);
    }
    creatTeddyDiv();

    function setImage() {
      let getTeddyDiv = document.querySelector("#teddy" + i);
      let img = document.createElement("img");
      img.src = allProducts[i].imageUrl;
      img.className = "image card-img-top img-fluid";
      getTeddyDiv.appendChild(img);
    }
    setImage();

    function newDivCardBody() {
      let getTeddyDiv = document.querySelector("#teddy" + i);
      let div = document.createElement("div");
      div.className = "card-body";
      div.id = "card-body" + i;
      getTeddyDiv.appendChild(div);
    }
    newDivCardBody();

    function setName() {
      let getCardBody = document.querySelector("#card-body" + i);
      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerHTML = allProducts[i].name;
      getCardBody.appendChild(h5);
    }
    setName();

    function setDescription() {
      let getCardBody = document.querySelector("#card-body" + i);
      let p = document.createElement("p");
      p.className = "card-text";
      p.innerHTML = allProducts[i].description;
      getCardBody.appendChild(p);
    }
    setDescription();

    function setPrice() {
      let getCardBody = document.querySelector("#card-body" + i);
      let p = document.createElement("p");
      p.className = "card-text";
      p.innerHTML = "Prix:" + " " + allProducts[i].price + "€";
      getCardBody.appendChild(p);
    }
    setPrice();

    function creatButton() {
      let getCardBody = document.querySelector("#card-body" + i);
      let a = document.createElement("a");
      a.className = "btn btn-primary";
      a.href = "/product.html?ProductId=" + allProducts[i]._id;
      a.innerText = "Détail";
      getCardBody.appendChild(a);
    }
    creatButton();
  }
}

getProducts().then((allProducts) => {
  showElements();
});
