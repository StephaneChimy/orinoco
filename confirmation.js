function showConfirmation() {
  creatDiv()
}

function getOrderId() {
  return window.location.search.slice(9);
}

function creatDiv() {
    let OrderId = getOrderId();
    let getConfirmation = document.querySelector("#affConfirmation");
    let div = document.createElement("div");
    div.className = "card col-8";
    div.innerHTML = "Votre numéros de commande est le: " + OrderId + ".";
    getConfirmation.appendChild(div);
  }

  showConfirmation();
