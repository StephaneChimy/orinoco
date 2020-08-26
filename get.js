var request = new XMLHttpRequest();
var allElements;
var nombreElements;

// Création d'une div affichant le tableau
//document.body.onload = showElement;
function showElements() {
  for (var i = 0; i < allElements.length; i++) {
    function creatTeddyDiv() {
      let getAffElem = document.getElementById("affElem");
      let div = document.createElement("div");
      div.setAttribute("id", "teddy" + i);
      getAffElem.appendChild(div);
    }
    creatTeddyDiv();

    function populateTeddyDiv() {
      function getName() {
        const getTeddy = document.getElementById("teddy" + i);
        console.log(document.getElementById("teddy" + i));
        let div = document.createElement("div");
        div.className = "name";
        div.innerHTML = allElements[i].name;
        getTeddy.appendChild(div);
      }
      getName();

      function getDescription() {
        const getTeddy = document.getElementById("teddy" + i);
        console.log(document.getElementById("teddy" + i));
        let div = document.createElement("div");
        div.className = "description";
        div.innerHTML = allElements[i].description;
        getTeddy.appendChild(div);
      }
      getDescription();

      function getPrice() {
        const getTeddy = document.getElementById("teddy" + i);
        console.log(document.getElementById("teddy" + i));
        let div = document.createElement("div");
        div.className = "prix";
        div.innerHTML = allElements[i].price;
        getTeddy.appendChild(div);
      }
      getPrice();

      function getImage() {
        const getTeddy = document.getElementById("teddy" + i);
        console.log(document.getElementById("teddy" + i));
        let img = document.createElement("img");
        img.setAttribute("src", allElements[i].imageUrl);
        img.className = "image";
        getTeddy.appendChild(img);
      }
      getImage();

      function getColors() {
        const getTeddy = document.getElementById("teddy" + i);
        console.log(document.getElementById("teddy" + i));
        let div = document.createElement("div");
        div.className = "colors";
        div.innerHTML = allElements[i].colors;
        getTeddy.appendChild(div);
      }
      getColors();
    }
    populateTeddyDiv();
  }
}

request.open("GET", "http://localhost:3000/api/teddies");
request.send();

request.onload = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    allElements = JSON.parse(this.response);
    console.log(allElements);
    console.log(allElements.length);
    // Ajout du nombre d'éléments à afficher dans une variable nombreElements
    nombreElements = allElements.length;
    // Control si aucun élément n'est à afficher
    console.log(nombreElements);
    // Creation des elements à afficher
    
    if(allElements.length > -1){
      showElements();
    }
    else {
      alert("Aucun produit n'est disponible pour le moment.");
    };
  } else {
    alert("Un problème est survenu, merci de revenir plus tard.");
  }
};
