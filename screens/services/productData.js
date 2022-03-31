export function getProductData(id) {

    const date = {
      from_date: "2022-03-29",
      to_date: "2022-03-29",
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
