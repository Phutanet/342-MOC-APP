export function getProductData(id, fromDate, toDate) {
    const input = {
      product_id: id,
      from_date: fromDate,
      to_date: toDate,
    }
    const url = ("https://dataapi.moc.go.th/gis-product-prices?product_id="
                +input.product_id
                +"&from_date="
                +input.from_date
                +"&to_date="
                +input.to_date);

    return fetch(url)
      .then(data => data.json())
  }