const request = new XMLHttpRequest();

// Will perform a GET request to the API
function apiGet(url) {
  return new Promise((resolve, reject) => {
    request.open("GET", config.apiBaseUrl + "/" + url);
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        response = JSON.parse(request.response);
        console.log("Récupération de la réponse");
        console.log(response);
        resolve(response);
      } else {
        reject(console.log("Problème execution fonction apiGet."));
      }
    };
    request.send();
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

// Will perform a POST request to the API
function apiPost(url, body) {
  return new Promise((resolve, reject) => {
    request.open("POST", config.apiBaseUrl + "/" + url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      if (request.readyState == 4 && request.status == 201) {
        response = JSON.parse(request.response);
        console.log("Récupération de la réponse");
        console.log(response);
        resolve(response);
      } else {
        reject(console.log("Problème execution fonction apiPost."));
      }
    };
    request.send(body);
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
// function apiPost(url, body) {
//   const options = {
//     method: "POST",
//     body: body,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(config.apiBaseUrl + "/" + url, options)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .catch((error) => {
//       // console.log(error.message);
//       throw new Error(error).message;
//     });
// }
