var request = new XMLHttpRequest();
var allElements;
var nombreElements;

// Création d'une div affichant le tableau
//document.body.onload = showElement;
function showElements(teddies) {
  for (var i = 0; i < allElements.length; i++) {

    // creation d'un element div par teddy
    let getDiv = document.getElementById("affElem");
    let newDiv = document.createElement("div");
    newDiv.className = "teddy" + i; //Ajout de la class en fonction de i a l'element div
    newDiv.innerText = allElements[i].name; // insert le nom du teddy dans la div
    getDiv.appendChild(newDiv); // creation d'une div
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
    showElements();
  }
};
