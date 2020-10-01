////////////////////////////////////////////// Variables //////////////////////////////////////////////

let parsedUrl = new URL(window.location.href);
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////

showConfirmation();

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function getOrderId() {
  return parsedUrl.searchParams.get("OrderId");
}
function getTotalPaid() {
  return parsedUrl.searchParams.get("totalPaid");
}

function showConfirmation() {
  if ((getOrderId() != null) && getTotalPaid() != 0){
    createNode("main", "section", {className : "justify-content-around text-center"});
    createNode("section", "p", {innerText : "Le montant de votre achat est de: " + PriceFormat(getTotalPaid())});
    createNode("section", "p", {innerText : "Votre numéros de commande est le: " + getOrderId()});
    //populateOrderId();
  }else{
    showErrorConnection("Vous n'avez pas commandé, merci de revenir sur la page principale");
  }
  
}

