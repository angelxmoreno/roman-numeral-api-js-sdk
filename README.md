# roman-numeral-api-js-sdk

The official RomanNumeralApi javascript SDK

## Installation

```bash
yarn add roman-numeral-api-js-sdk
// or
npm install roman-numeral-api-js-sdk
```

## Sample call

```js
// given
const decimalNumber = 1234;
const romanNumber = 'MCCXXXIV';

// 1. an anonymous request as a promise
const client = new Client();
client.toRomanNumeral(decimalNumber).then(function (returned) {
    // will log `Matches`
    console.log(returned === romanNumber ? 'Matches' : 'did not match');
});

// 2. an authenticated request as an aync/await
const convert = async () => {
    const client = new Client('YOUR_API_KEY');
    const returned = await client.toDecimalNumber(romanNumber);
    // will log `Matches`
    console.log(returned === decimalNumber ? 'Matches' : 'did not match');
};

// 3. the kitchen sink
const API_KEY = process.env.APIKEY || '';
const serverUrl = 'http://some-other-instance.example';
const axiosInstance = axios.create({
    httpAgent: 'some http agent name',
});

const client = new Client(API_KEY, serverUrl, axiosInstance);
```
