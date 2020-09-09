var request = new XMLHttpRequest();
//var infosContactToSend;
 var contact = {
  firstName: "toto",
  lastName: "tota",
  address: "onsenfou",
  city: "toyota",
  email: "jack@toma.com",
};

//contact = JSON.stringify(contact);

var products = ["5beaaa8f1c9d440000a57d95"];

//products = JSON.stringify(products);

 /* function Contact(firstName, lastName, address, city, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.email = email;
} */ 

//contactInfos = new Contact('toto', 'tota', 'onsenfou', 'tooye', 'a@a')
//console.log(contactInfos); 

function sendInfosToServer() {
  request.open("POST", "http://localhost:3000/api/teddies/order");
  request.setRequestHeader("Content-Type", "application/json");
  //request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(contact & products); //contact&products
  request.onload = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      //console.log(this.response);
    } else {
      //console.log(this.response);
      //alert("Un problème est survenu, merci de revenir plus tard.");
    }
  };
}
//setLastnameInput();
//setFirstnameInput();
//setAddressInput();
//setCityInput();
//setEmailInput();

ClickOnButton();

function ClickOnButton() {
  var button = document.getElementById("submit");
  button.addEventListener("click", (e) => {
    //e.preventDefault();
    /* contact = JSON.stringify(contactInfos);
    console.log(contact);
    setProduct();
    console.log(products); */
    sendInfosToServer();
  });
}

function setFirstnameInput() {
  var firstName = document.getElementById("inputSurname");
  firstName.addEventListener("input", function (e) {
    contactJson.firstName = e.target.value;
    //console.log(contact);
  });
}

function setLastnameInput() {
  var lastName = document.getElementById("inputName");
  lastName.addEventListener("input", function (e) {
    contactJson.lastName = e.target.value;
  });
}
function setAddressInput() {
  var address = document.getElementById("inputAdresse");
  address.addEventListener("input", function (e) {
    contactJson.address = e.target.value;
  });
}
function setCityInput() {
  var city = document.getElementById("inputCity");
  city.addEventListener("input", function (e) {
    contactJson.city = e.target.value;
  });
}
function setEmailInput() {
  var email = document.getElementById("inputEmail");
  email.addEventListener("input", function (e) {
    contactJson.email = e.target.value;
    console.log(contactJson);
  });
}

function setProduct() {
  var productTemp = [];
  for (let nbProducts = 0; nbProducts < localStorage.length; nbProducts++) {
    productTemp.push(
      JSON.parse(localStorage.getItem(localStorage.key(nbProducts)))
    );
    products.push(productTemp[nbProducts].id);
  }
  JSON.stringify(products);
  //products = JSON.stringify(products);
  //console.log(products);
}
