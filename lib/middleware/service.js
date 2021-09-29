const ModelData = require('./Model');
const { fetchApi } = require('../utils/fetchUtils');


class ServiceData {
    static async getCharacterData() {
        const characterData = await fetchApi();
        return characterData.results.map((CharacterInfo) => {
            return {
                id: CharacterInfo.id,
                name: CharacterInfo.name, 
                status: CharacterInfo.status, 
                species: CharacterInfo.species,
            };
        });
    }
}
//api call
//munge data
//send to db
//retrieve from db
//display it
module.exports = ServiceData;
