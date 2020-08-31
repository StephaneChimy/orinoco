document.addEventListener("DOMContentLoaded", function () {
  // this function runs when the DOM is ready, i.e. when the document has been parsed
  var getButton = document.querySelector(".addToBasket");

  getButton.addEventListener("click", () => {
    prompt("test");
    //localStorage.setItem("item", getIdInUrl);
  });
});
