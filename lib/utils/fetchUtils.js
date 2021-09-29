const fetch = require('node-fetch');

async function fetchApi() {
    const url = ' https://rickandmortyapi.com/api';
    const req = await fetch(url);
    const res = await req.json;
    return res;
}
  

  module.exports = { fetchApi };

  