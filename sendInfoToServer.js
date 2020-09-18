////////////////////////////////////////////// Variables //////////////////////////////////////////////

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

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function sendInfosToServer() {
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
          //console.log(response);
          for (let product = 0; product < response.products.length; product++) {
            // Calculate total paid in the answer
            totalPaid += response.products[product].price;
            console.log(totalPaid);
          }
          //console.log(totalPaid);

          // Redirection with the order id and total paid in parameters
          document.location.href =
            "confirmation.html?OrderId=" +
            response.orderId +
            "&" +
            "totalPaid=" +
            totalPaid;
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
    infosSendJson = JSON.stringify(infosToSend);
    sendInfosToServer();
  });
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
  for (cle = 0; cle < localStorage.length; cle++) {
    if (localStorage.key(cle) == "basket") {
      let productsInLocalStorage = JSON.parse(
        localStorage.getItem(localStorage.key(cle))
      );
      for (let product in productsInLocalStorage.products) {
        let quantity = productsInLocalStorage.products[product].Quantite;
        for (let i = 0; i < quantity; i++) {
          products.push(productsInLocalStorage.products[product].id);
        }
      }

      console.log(products);
    }
  }
  infosToSend.products = products;
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////
setProducts();
setLastnameInput();
setFirstnameInput();
setAddressInput();
setCityInput();
setEmailInput();
ClickOnButton();
