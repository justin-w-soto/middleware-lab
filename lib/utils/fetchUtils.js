const fetch = require('node-fetch');

async function getMoon() {
  const response = await fetch(
      `https://wordsapiv1.p.rapidapi.com/words/.22-caliber/pertainsTo`
  );
  const moonData = await response.json();
  const data = moonData.data.map((object) => {
      return {}

      return data;
  })};

  // fetch("https://wordsapiv1.p.rapidapi.com/words/.22-caliber/pertainsTo", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  //     "x-rapidapi-key": "beddea7934mshf6766e3c229cf7ep11e2a2jsn72325e5a025f"
  //   }
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // });
  