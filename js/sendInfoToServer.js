////////////////////////////////////////////// Variables //////////////////////////////////////////////

let products = [];
let orderJsoned;
let totalPaid = 0;
let order = {
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

function ClickOnButton() {
  let formulaire = document.querySelector("#formulaire");

  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    orderJsoned = JSON.stringify(order);
    sendOrder();
  });
}
// Set informations from user in infoToSend
function setFirstnameInput() {
  let firstName = document.getElementById("inputSurname");
  firstName.addEventListener("input", function (e) {
    order.contact.firstName = e.target.value;
  });
}

function setLastnameInput() {
  let lastName = document.getElementById("inputName");
  lastName.addEventListener("input", function (e) {
    order.contact.lastName = e.target.value;
  });
}
function setAddressInput() {
  let address = document.getElementById("inputAddress");
  address.addEventListener("input", function (e) {
    order.contact.address = e.target.value;
  });
}
function setCityInput() {
  let city = document.getElementById("inputCity");
  city.addEventListener("input", function (e) {
    order.contact.city = e.target.value;
  });
}
function setEmailInput() {
  let email = document.getElementById("inputEmail");
  email.addEventListener("input", function (e) {
    order.contact.email = e.target.value;
    console.log(order);
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
  order.products = products;
}
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////
setProducts();
setLastnameInput();
setFirstnameInput();
setAddressInput();
setCityInput();
setEmailInput();
ClickOnButton();
