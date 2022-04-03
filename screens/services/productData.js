function getProductData(id) {

    const date = {
      from_date: "2022-03-04",
      to_date: "2022-04-04",
    }
  
    const url = ("https://dataapi.moc.go.th/gis-product-prices?product_id="
      +id
      +"&from_date="
      +date.from_date
      +"&to_date="
      +date.to_date);
  
    return fetch(url)
      .then(data => data.json());
}

async function getProductList(category_name) {
    const url = "https://dataapi.moc.go.th/gis-products"

    return await fetch(url)
      .then(data => data.json());
}


export {getProductData, getProductList}