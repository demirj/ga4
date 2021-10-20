let customParams = {};
let exceedLimit = 100;

for (let i = 1; i <= exceedLimit; i++) {
  let key = 'key';
  let value = 'value' + i;

  customParams[key + i] = value;

}

console.log(customParams);

fetch(`https://www.google-analytics.com/mp/collect?measurement_id=G-XXX&api_secret=XXX`, {
  method: "POST",
  body: JSON.stringify({
    client_id: '123.123',
    events: [{
      name: 'paramTest',
      params: customParams,
    }]
  })
}).then(response => console.log(response)).then(data => console.log(data));
