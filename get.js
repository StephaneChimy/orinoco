var request = new XMLHttpRequest();
var allElements;
var nombreElements;

// Création d'une div affichant le tableau
//document.body.onload = showElement;
function showElements() {
  for (var i = 0; i < allElements.length; i++) {
    function creatTeddyDiv() {
      let getProduct = document.getElementById("affProduct");
      let div = document.createElement("div");
      div.setAttribute("id", "teddy" + i);
      div.className = "card justify-content-around col-5";
      getProduct.appendChild(div);
    }
    creatTeddyDiv();

    function populateTeddyDiv() {
      function getImage() {
        const getTeddy = document.getElementById("teddy" + i);
        let img = document.createElement("img");
        img.setAttribute("src", allElements[i].imageUrl);
        img.className = "image";
        img.className = "card-img-top";
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
        div.innerHTML = allElements[i].name;
        getTeddy.appendChild(div);
      }
      getName();

      function getDescription() {
        const getTeddy = document.getElementById("card-body" + i);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = allElements[i].description;
        getTeddy.appendChild(div);
      }
      getDescription();

      function getPrice() {
        const getTeddy = document.getElementById("card-body" + i);
        let div = document.createElement("p");
        div.className = "card-text";
        div.innerHTML = "Prix:"+ " " + allElements[i].price + "€";
        getTeddy.appendChild(div);
      }
      getPrice();

      function  creatButton() {
        const getTeddy = document.getElementById("card-body" + i);
        let div = document.createElement("a");
        div.className = "btn btn-primary";
        div.setAttribute("href", "http://127.0.0.1:5500/products.html?" + allElements[i]._id);
        div.setAttribute("target", "_blank");
        div.innerText = "Détail";
        getTeddy.appendChild(div);
      }
      creatButton()
    }
    populateTeddyDiv();
  }
}

request.open("GET", "http://localhost:3000/api/teddies");
request.send();

request.onload = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    allElements = JSON.parse(this.response);
    //console.log(allElements);
    console.log(allElements.length);
    // Ajout du nombre d'éléments à afficher dans une variable nombreElements
    nombreElements = allElements.length;
    // Control si aucun élément n'est à afficher
    console.log(nombreElements);
    // Creation des elements à afficher

    /////////////

    

    /* const getObject = document.getElementsByClassName("btn");
    const getIdOfObject = getObject[0].getAttribute("id");

    var getButton = document.querySelector("button"); */

    //BUTTON
    /* getButton.addEventListener("click", () => {
      for (const j of allElements) {
        if (j._id === getIdOfObject) {
          console.log(j._id);
          console.log(j.name);

          function creatTeddyDiv() {
            let getAffElem = document.getElementById("affProduct");
            let div = document.createElement("div");
            div.setAttribute("id", "teddy" + j._id);
            div.className = "card";
            getAffElem.appendChild(div);
          }
          creatTeddyDiv();

          function getName() {
            const getTeddy = document.getElementById("affProduct");
            let div = document.createElement("h5");
            div.className = "card-title";
            div.innerHTML = j.name;
            getTeddy.appendChild(div);
          }
          getName();

        };
        console.log(j._id);
      };

    }); */
    ///

    /* for (const j of allElements) {
      if (j._id === getIdOfObject) {
        console.log(j._id);
        console.log(j.name);
      }
      console.log(j._id);
    } */

    ////////

    if (allElements.length > -1) {
      showElements();
    } else {
      alert("Aucun produit n'est disponible pour le moment.");
    }
  } else {
    alert("Un problème est survenu, merci de revenir plus tard.");
  }
};
