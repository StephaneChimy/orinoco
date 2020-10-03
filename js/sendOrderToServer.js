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
//
setProductsToOrder();
// Create a list of fields used in setEventForField()
const fields = ["firstName", "lastName", "address", "city", "email"];
// Create an event for each field to set the input of the user in the order.contact
fields.forEach(field => setEventForField(field));
//
sendOrderToServerByClickOnButton();

////////////////////////////////////////////// Fonctions //////////////////////////////////////////////

function sendOrderToServerByClickOnButton() {
  let formulaire = document.querySelector("#formulaire");

  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    let orderJsoned = JSON.stringify(order);
    try {
    console.log("bouton cliqué");
    postOrder(orderJsoned);
    console.log("function postorder");
    } catch (error) {
        console.error(error);
        throw new error("Erreur lors de l'envoi de l'order");
    }
  });
}
// Set informations from user input to order.contact
function setEventForField(fieldName) {
  locationOfIndex = "#" + fieldName;
  let element = document.querySelector(locationOfIndex);
  element.addEventListener("input", function (e) {
    order.contact[fieldName] = e.target.value;
    console.log(order);
    
  });
}

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
