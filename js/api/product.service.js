// Fetch a product by its ID
function fetchProduct(id, productType) {
  return apiGet(productType + "/" + id);
}

// Fetch a list of products
function fetchProducts(productType) {
  return apiGet(productType);
}
