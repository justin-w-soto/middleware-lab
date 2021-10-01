const ModelData = require('../middleware/Model.js');
const { fetchApi } = require('../utils/fetchUtils.js');

class ServiceData {

    static async getAll(){
      const info = await fetchApi();
      return info.results.map((character) => {
        return{
          id: character.id,
          name: character.name,
          species: character.species,
          status: character.status,
        };
      });
    }
  
    static async postChar(id){
      const charactersData = await this.getAll();
      const characterID = Number(id);
  
      const newArray = [];
  
      for(const character of charactersData){
        if(character.id === characterID){
          newArray.push(character.name);
          newArray.push(character.species);
          newArray.push(character.status);
        }
      }
      
      const newChar = await ModelData.insert({ 
        name: newArray[0],
        species: newArray[1],
        status: newArray[2]
      });
      return newChar;
    }
  
    static async getSavedChars(){
      const allCharacters = await ModelData.allCharacters();
      return allCharacters;
    }
  
    static async getById(id){
      const character = await ModelData.getCharById(id);
      return character;
    }
  
    static async updateCharById(id, object){
      const updatedChar = await ModelData.updateCharacterById(id, object);
      return updatedChar;
    }
  
    static async deleteCharById(id){
      const character =  await ModelData.deleteById(id);
      return character;
    }
  
  
  
  
  
  }
  
  module.exports = ServiceData;