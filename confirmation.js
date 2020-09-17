let parsedUrl = new URL(window.location.href);
///////////////////////////

function getOrderId() {
  return parsedUrl.searchParams.get("OrderId");
}
function getTotalPaid() {
  return parsedUrl.searchParams.get("totalPaid");
}
function populatetotalPaid() {
  let totalPaid = getTotalPaid();

  let getConfirmation = document.querySelector("#total");
  getConfirmation.innerHTML = "Le montant de votre achat est de: " + totalPaid;
}

function populateOrderId() {
  let orderId = getOrderId();

  let getConfirmation = document.querySelector("#orderId");
  getConfirmation.innerHTML = "Votre numéros de commande est le: " + orderId;
}

function showConfirmation() {
  populatetotalPaid();
  populateOrderId();
}
/////////////////////////

showConfirmation();
