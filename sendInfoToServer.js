var request = new XMLHttpRequest();
//var infosContactToSend;
/* var contact = {
  firstName: "toto",
  lastName: "tota",
  address: "onsenfou",
  city: "toyota",
  email: "jack@toma.com",
}; */

//contact = JSON.stringify(contact);

var products = [];

var infosToSend = {
  contact: {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
  },
  products: "",
};

var infosSendJson;

//console.log(infosSendJson);
/* products = JSON.stringify(products);

 function Contact(firstName, lastName, address, city, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.email = email;
}  */

//contactInfos = new Contact('toto', 'tota', 'onsenfou', 'tooye', 'a@a')
//contact = JSON.stringify(contactInfos);
//console.log(contactInfos);

function sendInfosToServer() {
  request.open("POST", "http://localhost:3000/api/teddies/order");
  request.setRequestHeader("Content-Type", "application/json");
  //request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(infosSendJson); //contact&products
  request.onload = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log(this.response);
    } else {
      console.log(JSON.parse(this.response));
      //alert("Un problème est survenu, merci de revenir plus tard.");
    }
  };
}
setProducts();
setLastnameInput();
setFirstnameInput();
setAddressInput();
setCityInput();
setEmailInput();
ClickOnButton();

function ClickOnButton() {
  var button = document.getElementById("submit");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    //contact = JSON.stringify(contactInfos);
    //console.log(contact);
    infosSendJson = JSON.stringify(infosToSend);
    console.log(infosSendJson);
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
  var productTemp = [];
  for (let nbProducts = 0; nbProducts < localStorage.length; nbProducts++) {
    productTemp.push(
      JSON.parse(localStorage.getItem(localStorage.key(nbProducts)))
    );
    products.push(productTemp[nbProducts].id);
  }
  infosToSend.products = products;
  //products = JSON.stringify(products);
  //console.log(products);
}
