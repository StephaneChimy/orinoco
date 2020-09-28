////////////////////////////////////////////// Variables //////////////////////////////////////////////

let parsedUrl = new URL(window.location.href);
////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function getOrderId() {
  return parsedUrl.searchParams.get("OrderId");
}
function getTotalPaid() {
  return parsedUrl.searchParams.get("totalPaid");
}
// Format price
function PriceFormat(price) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
}

function populatetotalPaid() {
  let getConfirmation = document.querySelector("#total");
  getConfirmation.innerHTML = "Le montant de votre achat est de: " + PriceFormat(getTotalPaid());
}

function populateOrderId() {
  let getConfirmation = document.querySelector("#orderId");
  getConfirmation.innerHTML = "Votre numéros de commande est le: " + getOrderId();
}

function showConfirmation() {
  populatetotalPaid();
  populateOrderId();
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

showConfirmation();