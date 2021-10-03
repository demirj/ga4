let itemsObj = [];
let exceedLimit = 500;

for (let i = 1; i <= exceedLimit; i++) {

    itemsObj[i] = {
      'item_id': i,
      'item_name': 'This is my item with the name ' + i + ' and that is it',
      'item_brand': "Brand " + i,
      'item_category': "Category " + i,
      'item_variant': "Color " + i,
      'price': 1.99 + i,
      'quantity': i
    };
}

console.log(itemsObj);

// let ga4Id = 'G-BLKKP3RJVD';
// let ga4Api = 'mvlzBFr2QrqZB4NFaRh3XQ';


fetch(`https://www.google-analytics.com/mp/collect?measurement_id=G-BLKKP3RJVD&api_secret=mvlzBFr2QrqZB4NFaRh3XQ`, {
  method: "POST",
  body: JSON.stringify({
    'client_id': '123.123',
    'events': [{
      'name': 'add_to_cart',
      'params': {
        'transaction_id': '123456789',
        'value': 1999.99,
        'currency': 'EUR',
        'items': itemsObj
      }
    }]
  })
}).then(response => console.log(response)).then(data => console.log(data));
