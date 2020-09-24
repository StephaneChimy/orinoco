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
      if(document.querySelector("#showBasket")){
        showErrorConnection()
      }else{
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
