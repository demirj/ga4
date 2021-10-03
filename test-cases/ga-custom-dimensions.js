let customParams = {};
let exceedLimit = 100;

for (let i = 1; i <= exceedLimit; i++) {
  let key = 'key';
  let value = 'value' + i;

  customParams[key + i] = value;

}

console.log(customParams);

// let ga4Id = 'G-BLKKP3RJVD';
// let ga4Api = 'mvlzBFr2QrqZB4NFaRh3XQ';


fetch(`https://www.google-analytics.com/mp/collect?measurement_id=G-BLKKP3RJVD&api_secret=mvlzBFr2QrqZB4NFaRh3XQ`, {
  method: "POST",
  body: JSON.stringify({
    client_id: '123.123',
    events: [{
      name: 'paramTest',
      params: customParams,
    }]
  })
}).then(response => console.log(response)).then(data => console.log(data));