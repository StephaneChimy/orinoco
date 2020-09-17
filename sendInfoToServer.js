let products = [];
let infosSendJson;
let totalPaid = 0;
let infosToSend = {
  contact: {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
  },
  products: "",
};
////////////////////////////////

function sendInfosToServer() {
  // request.open("POST", "http://localhost:3000/api/teddies/order");
  // request.setRequestHeader("Content-Type", "application/json");
  // request.send(infosSendJson);
  const options = {
    method: "POST",
    body: infosSendJson,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:3000/api/teddies/order", options)
    .then((response) => {
      if (response.ok) {
        response.json().then((response) => {
          console.log(response);
          for (let i = 0; i < response.products.length; i++) {
            //console.log(response.products[i].price);
            totalPaid += response.products[i].price;
            console.log(totalPaid);
          }
          console.log(totalPaid);
          document.location.href =
            "confirmation.html?OrderId=" + response.orderId + "&" + "totalPaid=" + totalPaid + " €";
        });
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function ClickOnButton() {
  let formulaire = document.querySelector("#formulaire");

  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Le bouton fonctionne quand meme");
    infosSendJson = JSON.stringify(infosToSend);
    sendInfosToServer();
    //document.location.href = "confirmation.html?" + sendInfosToServer();
  });
}

function redirection() {
  document.location.href = "confirmation.html?" + sendInfosToServer();
}

function setFirstnameInput() {
  let firstName = document.getElementById("inputSurname");
  firstName.addEventListener("input", function (e) {
    infosToSend.contact.firstName = e.target.value;
  });
}

function setLastnameInput() {
  let lastName = document.getElementById("inputName");
  lastName.addEventListener("input", function (e) {
    infosToSend.contact.lastName = e.target.value;
  });
}
function setAddressInput() {
  let address = document.getElementById("inputAddress");
  address.addEventListener("input", function (e) {
    infosToSend.contact.address = e.target.value;
  });
}
function setCityInput() {
  let city = document.getElementById("inputCity");
  city.addEventListener("input", function (e) {
    infosToSend.contact.city = e.target.value;
  });
}
function setEmailInput() {
  let email = document.getElementById("inputEmail");
  email.addEventListener("input", function (e) {
    infosToSend.contact.email = e.target.value;
    console.log(infosToSend);
  });
}

function setProducts() {
  for (nbItem = 0; nbItem < localStorage.length; nbItem++) {
    if (localStorage.key(nbItem) == "basket") {
      let productsInLocalStorage = JSON.parse(
        localStorage.getItem(localStorage.key("basket"))
      );
      for (let nbProducts in productsInLocalStorage.products) {
        let quantity = productsInLocalStorage.products[nbProducts].Quantite;
        //console.log(quantity);
        for (let i = 0; i < quantity; i++) {
          products.push(productsInLocalStorage.products[nbProducts].id);
        }
      }

      console.log(products);
    }
  }
  infosToSend.products = products;
}
////////////////////////////////
setProducts();
setLastnameInput();
setFirstnameInput();
setAddressInput();
setCityInput();
setEmailInput();
ClickOnButton();
