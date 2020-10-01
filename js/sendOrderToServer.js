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
setProductsToOrder();
// 
const fields = ["firstName", "lastName", "address", "city", "email"];
// Create an event for each field to set the input of the user in the order.contact
fields.forEach(field => setEventForField(field));
//
// setLastnameInputToOrderContact();
//setInputToOrderContact("#inputName", order.contact.lastName)
//setFirstnameInputToOrderContact();
// setEventForField("Firstname");
// setAddressInputToOrderContact();
// setCityInputToOrderContact();
// setEmailInputToOrderContact();
sendOrderToServerByClickOnButton();

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function sendOrderToServerByClickOnButton() {
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

// function setInputToOrderContact(locationOfInput, ){
//   let node = document.querySelector(locationOfInput);
//   node.addEventListener("input", function (e) {
//     console.log(orderContactField);
//     orderContactField = e.target.value;
//     console.log(orderContactField);
//     console.log(order);
//   });
// };


function setEventForField(fieldName) {
  locationOfIndex = "#" + fieldName;
  console.log(locationOfIndex);
  let element = document.querySelector(locationOfIndex);
  element.addEventListener("input", function (e) {
    order.contact[fieldName] = e.target.value;
    console.log(order);
    
  });
}


// function setFirstnameInputToOrderContact() {
//   let firstName = document.querySelector("#inputFirstname");
//   firstName.addEventListener("input", function (e) {
//     order.contact.firstName = e.target.value;
//   });
// }
// function setLastnameInputToOrderContact() {
//   let lastName = document.querySelector("#inputLastname");
//   lastName.addEventListener("input", function (e) {
//     order.contact.lastName = e.target.value;
//   });
// }
// function setAddressInputToOrderContact() {
//   let address = document.querySelector("#inputAddress");
//   address.addEventListener("input", function (e) {
//     order.contact.address = e.target.value;
//   });
// }
// function setCityInputToOrderContact() {
//   let city = document.querySelector("#inputCity");
//   city.addEventListener("input", function (e) {
//     order.contact.city = e.target.value;
//   });
// }
// function setEmailInputToOrderContact() {
//   let email = document.querySelector("#inputEmail");
//   email.addEventListener("input", function (e) {
//     order.contact.email = e.target.value;
//     console.log(order);
//   });
// }
// Set products in order.products
function setProductsToOrder() {
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
