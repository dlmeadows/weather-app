const request = require('request');

const url = 'https://api.darksky.net/forecast/873aa2d9043f3ff7b1ffab06d6580683/37.8267,-122.4233';

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(JSON.stringify(data.currently, null, 4));
});
