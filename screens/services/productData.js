function getProductData(id, from_date, to_date) {
  
    const url = ("https://dataapi.moc.go.th/gis-product-prices?product_id="
      +id
      +"&from_date="
      +from_date
      +"&to_date="
      +to_date);
  
    return fetch(url)
      .then(data => data.json());
}

function getProductList(category_name) {
    const url = "https://dataapi.moc.go.th/gis-products"

    return fetch(url)
      .then(data => data.json());
}


export {getProductData, getProductList}