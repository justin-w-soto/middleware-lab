const fetch = require('node-fetch').default;

async function getStuff() {
  const responseFromApi = await fetch(
    'http goes here'
  );const apiData = await responseFromApi.json();
  const data = apiData.data.map(() => {
    return {
      some data as an object
      }),

    };

  return data;

