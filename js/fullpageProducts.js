// showProduct is in fonctions.js
// getProducts is in apiRequests.js

////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

getProducts("http://localhost:3000/api", "teddies").then(function () {
  showProducts();
});
