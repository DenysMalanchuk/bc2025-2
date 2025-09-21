const { URL, URLSearchParams } = require('url');

const currency = 'JPY';
const exact_date = '20240127';

const base = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';
const url = new URL(base);
url.search = new URLSearchParams({
  valcode: currency,
  date: exact_date,
  json: ''
}).toString();

console.log(url.toString());
