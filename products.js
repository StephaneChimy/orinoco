var request = new XMLHttpRequest();
var allElements;
var nombreElements;

///////////////
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

    //const getObject = document.getElementsByClassName("btn");
    //const getIdOfObject = getObject[0].getAttribute("id");

    //alert("url: " + getIdInUrl);

    //var getButton = document.querySelector("button");

    //BUTTON
    // getButton.addEventListener("click", () => {

    //Obtenir l'id dans l'url
    var getIdInUrl = window.location.search.slice(1);

    for (const j of allElements) {
      if (j._id === getIdInUrl) {
        //console.log(j._id);
        //console.log(j.name);

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
      }
      
      console.log(j._id);
    }

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
