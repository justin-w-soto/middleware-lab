const ModelData = require('./Model');
const { fetchApi } = require('../utils/fetchUtils');

//api call
//munge data
//send to db
//retrieve from db
//display it
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

    static async getAllCharacterData() {
        const allData = await ModelData.charDat();
        return allData;
      }

    static async getCharacterById() {
        const charId = await ModelData.getCharById();
        return charId;
    }

    static async updateCharacter(id, object) {
        const updateChar = await ModelData.updateThatChar(id, object);
        return updateChar;
    }
    
    static async deleteCharacterData(id) {
        const char = await ServiceData.delete(id);
        return char;
    }
    
}
module.exports = ServiceData;
