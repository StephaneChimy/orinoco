var request = new XMLHttpRequest();
var allElements;
var nombreElements;
var nomOurs;
var idOurs;
var prix;

var getIdInUrl = window.location.search.slice(11);

var basketToParam = {
  Nom: "",
  id: "",
  Quantite: "",
};
console.log(basketToParam);

///////////////
request.open("GET", "http://localhost:3000/api/teddies/" + getIdInUrl);
request.send();
request.onload = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    allElements = JSON.parse(this.response);
    console.log(allElements);
    //console.log(allElements.length);
    // Ajout du nombre d'éléments à afficher dans une variable nombreElements
    //nombreElements = allElements.length;
    // Control si aucun élément n'est à afficher
    //console.log(nombreElements);
    // Creation des elements à afficher
    afficherProduit();
    listenButton();
  } else {
    alert("Un problème est survenu, merci de revenir plus tard.");
  }
};

//////////////////////////////////
function afficherProduit() {
  
    
      function creatTeddyDiv() {
        let getAffElem = document.getElementById("affProduct");
        let div = document.createElement("div");
        div.setAttribute("id", "teddy" + allElements["_id"]);
        idOurs = allElements["_id"];
        div.className = "card col-8";
        getAffElem.appendChild(div);
      }
      creatTeddyDiv();

      function getImage() {
        const getTeddy = document.getElementById("teddy" + allElements["_id"]);
        let img = document.createElement("img");
        img.setAttribute("src", allElements["imageUrl"]);
        img.className = "image";
        img.className = "card-img-top";
        getTeddy.appendChild(img);
      }
      getImage();

      function newDiv() {
        const getTeddy = document.getElementById("teddy" + allElements["_id"]);
        let div = document.createElement("div");
        div.className = "card-body";
        div.setAttribute("id", "card-body" + allElements["_id"]);
        getTeddy.appendChild(div);
      }
      newDiv();

      function getName() {
        const getTeddy = document.getElementById("card-body" + allElements["_id"]);
        let div = document.createElement("h5");
        div.className = "card-title";
        div.innerHTML = allElements["name"];
        nomOurs = allElements["name"];
        getTeddy.appendChild(div);
      }
      getName();

      function getDescription() {
        const getTeddy = document.getElementById("card-body" + allElements["_id"]);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = allElements["description"];
        getTeddy.appendChild(div);
      }
      getDescription();

      function newSelect() {
        const getTeddy = document.getElementById("card-body" + allElements["_id"]);
        let select = document.createElement("select");
        select.className = "custom-select browser-default";
        select.setAttribute("id", "select" + allElements["_id"]);
        getTeddy.appendChild(select);
      }
      newSelect();

      function firstSelected(){
        const getTeddy = document.getElementById("select" + allElements["_id"]);
        let firstOption = document.createElement("option");
          firstOption.className = "selected";
          firstOption.innerHTML = "Choisissez votre couleur";
          getTeddy.appendChild(firstOption);
          
      }
      firstSelected();
      
      var value = 0;
        for (const eachColors of allElements["colors"]) {
          
          function getColors() {
            
            const getTeddy = document.getElementById("select" + allElements["_id"]);
            let colorsOption = document.createElement("option");
            colorsOption.className = "value="+ value;
            colorsOption.innerHTML = eachColors;
            getTeddy.appendChild(colorsOption);
            
          }
          value++
          getColors();
        }
      
      

      function getPrice() {
        const getTeddy = document.getElementById("card-body" + allElements["_id"]);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = "Prix:" + " " + allElements["price"] + "€";
        prix = allElements["price"];
        getTeddy.appendChild(div);
      }
      getPrice();

      function creatButton() {
        const getTeddy = document.getElementById("card-body" + allElements["_id"]);
        let div = document.createElement("button");
        div.className = "btn btn-primary addToBasket";
        div.setAttribute("id", "btn" + allElements["_id"]);
        div.setAttribute(
          "href",
          "http://127.0.0.1:5500/products.html?" + allElements["_id"]
        );
        div.innerText = "Ajouter au panier";
        getTeddy.appendChild(div);
      }
      creatButton();
    

    //console.log(j._id);
  
  
}
////////////////////////////////////////////
console.log(nomOurs);

function listenButton() {
  var getButton = document.querySelector(".addToBasket");
  console.log(getButton);
  getButton.addEventListener("click", () => {
    //localStorage.setItem("item" + localStorage.length, getIdInUrl);
    console.log("Button cliqué");

    checkLocalStorage();

    //console.log(basketToParam);
    console.log(localStorage);
  });
}

function checkLocalStorage() {
  if (localStorage.length < 1) {
    console.log("rien dans le localstorage");
    pushProductInBasket();
  } else {
    console.log("Au moins une donnée est dans localStorage");
    checkParamFromLocalStorage();
    //productControlBeforeBasket();
  }
}

function checkParamFromLocalStorage() {
  var productFound = false;

  for (nbItem = 0; nbItem < localStorage.length; nbItem++) {
    if (nomOurs === localStorage.key(nbItem)) {
      console.log(
        "un " + localStorage.key(nbItem) + " est déjà dans le localstorage"
      );
      //console.log(basketToParam);
      productFound = true;
      getParamFromLocalStorage();
    }
  }
  if (!productFound) {
    console.log(nomOurs + " n'est pas dans localStorage");
    pushProductInBasket();
  }
}
function getParamFromLocalStorage() {
  basketToParam = JSON.parse(localStorage.getItem(localStorage.key(nbItem)));
  console.log(basketToParam);

  incrementItem();
}

function incrementItem() {
  console.log(basketToParam);
  
  nb = basketToParam["Quantite"];
  
  //nb = basketToParam;
  console.log(nb);
  nb++;
  basketToParam["Quantite"] = nb;
  console.log(basketToParam);

  sendToLocalStorage();
}

function sendToLocalStorage() {
  basketToParamJson = JSON.stringify(basketToParam);
  //console.log(basketToParamJson);
  localStorage.setItem(nomOurs, basketToParamJson);
  console.log(localStorage.getItem(nomOurs));
}

function pushProductInBasket() {
  //console.log(id);
  let nombreDeProduit = 1;
  basketToParam = {
    Nom: nomOurs,
    id: idOurs,
    Quantite: nombreDeProduit,
  };
  sendToLocalStorage();
}

