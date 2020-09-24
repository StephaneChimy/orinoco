function getProducts(apiUrl, productType) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", apiUrl + "/" + productType);
    request.send();
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        products = JSON.parse(request.response);
        console.log("Récupération des produits OK");
        console.log(products);
        resolve(products);
      } else {
        reject(console.log("Problème execution fonction getProducts."));
      }
    };

    request.onerror = function () {
      if (document.querySelector("#showBasket")) {
        showErrorConnection();
      } else {
        showError();
      }

      console.log(
        "Status de la requête: " +
          request.status +
          " | " +
          "ReadyState de la requête: " +
          request.readyState
      );
    };
  });
}

function getProduct(apiUrl, productType, productId) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", apiUrl + "/" + productType + "/" + productId);
    request.send();
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        product = JSON.parse(request.response);
        console.log("Récupération du produit OK");
        console.log(product);
        resolve(product);
      } else {
        reject(console.log("Problème execution fonction getProduct."));
      }
    };

    request.onerror = function () {
      showError();
      console.log(
        "Status de la requête: " +
          request.status +
          " | " +
          "ReadyState de la requête: " +
          request.readyState
      );
    };
  });
}

function sendOrder() {
  const options = {
    method: "POST",
    body: orderJsoned,
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
          // Clear of the basket
          localStorage.removeItem("basket");
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
