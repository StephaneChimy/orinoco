var request = new XMLHttpRequest();
request.open("POST", "http://localhost:3000/api/teddies/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(contact&products);

request.onload = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
  } else {
  }
};

var contact = {
    "firstName" : "",
    "lastName" : "",
    "address" : "",
    "city" : "",
    "email" : ""
}

var product = [];
