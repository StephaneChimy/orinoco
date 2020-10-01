// function createNode(location, tag, id, className, src, href, content) {

//   let node = document.querySelector(location);
//   let createdTag = document.createElement(tag);
  
// // list = [("id", val), ("className", val), ("src", val)];
// // for k, v in list {
// //   createdTag.k = v
// // }

//   if (id) {
//     createdTag.id = id;
//   }

//   if (className) {
//     createdTag.className = className;
//   }

//   if (src) {
//     createdTag.src = src;
//   }

//   if (href) {
//     createdTag.href = href;
//   }

//   if (content) {
//     createdTag.innerText = content;
//   }
//   node.appendChild(createdTag);
// }

function createNode(location, tag, ...ListOfAttributs) { //location, tag, id, className, src, href, content
  
  let node = document.querySelector(location);
  let createdTag = document.createElement(tag);

  for(const [key, value] of Object.entries(ListOfAttributs[0])){
    //console.log(key+ " : " +value);
    createdTag[key] = value;
  }
  
// list = [("id", val), ("className", val), ("src", val)];
// for k, v in list {
//   createdTag.k = v
// }

  node.appendChild(createdTag);
}



// createNode('main', 'div', 'error', 'card col text-center text-light bg-danger', 'Erreur de connection, merci de revenir plus tard.')

function showError() {
  createNode("main", "div", "error", "card col text-center text-light bg-danger", false, false, "Erreur de connection, merci de revenir plus tard.")
}
function showErrorConnection() {
  let getShowBasket = document.querySelector("#showBasket");
  getShowBasket.style.display = "none";
  let getShowForm = document.querySelector("#showForm");
  getShowForm.style.display = "none";
  createNode("main", "div", "error", "card col text-center text-light bg-danger", false, false, "Erreur de connection, merci de revenir plus tard.")
}
function emptyBasket() {
  let getShowBasket = document.querySelector("#showBasket");
  getShowBasket.style.display = "none";
  let getShowForm = document.querySelector("#showForm");
  getShowForm.style.display = "none";
  createNode("main", "div", "error", "card col text-center text-info mx-aut", false, false, "Votre panier est vide.")
}
