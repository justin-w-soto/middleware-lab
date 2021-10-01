const fetch = require('node-fetch');
const url = 'https://rickandmortyapi.com/api';

async function fetchApi() {
    const fetchCharacterData = await fetch(`${url}/character`);
    const dataRes = await fetchCharacterData.json();
    return dataRes;
   
}
  

  module.exports = { fetchApi };

  