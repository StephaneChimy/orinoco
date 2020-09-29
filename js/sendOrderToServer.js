////////////////////////////////////////////// Variables //////////////////////////////////////////////
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
////////////////////////////////////////////// Execution of the script //////////////////////////////////////////////
setProducts();
setLastnameInput();
setFirstnameInput();
setAddressInput();
setCityInput();
setEmailInput();
ClickOnButton();

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function ClickOnButton() {
  let formulaire = document.querySelector("#formulaire");

  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    let orderJsoned = JSON.stringify(order);
    //try {
    console.log("bouton cliqué");
    postOrder(orderJsoned);
    console.log("function postorder");
    //} catch (error) {
    //  throw new error(error);
    // }
  });
}
// Set informations from user in order.contact
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
// Set products in order.products
function setProducts() {
  let products = [];
  if (checkLocalStorageKey("basket")) {
    let productsInLocalStorage = getLocalstorageKey("basket");
    for (let product in productsInLocalStorage.products) {
      let quantity = productsInLocalStorage.products[product].quantity;
      for (let i = 0; i < quantity; i++) {
        products.push(productsInLocalStorage.products[product].id);
      }
    }

    console.log(products);
  }

  order.products = products;
}
