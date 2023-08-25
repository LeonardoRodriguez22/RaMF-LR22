const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

// const KEY = "key=henrym-leonardorodriguez22/"
// const URL = "https://rym2-production.up.railway.app/api/character/?key=henrym-leonardorodriguez22/"

async function getCharById  (req, res) {
  try {
    const { id } = req.params;
    const {name, gender, status, image, species, origin } = (await axios.get(`${URL}/${+id}`)).data;
    const character = {
      key: id,
      id: id,
      name,
      gender,
      status,
      image,
      species,
      origin
    };
    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};



async function getCharDetail  (req, res) {
  try {
    const { id } = req.params;
    const {name, gender, status, image, species, origin } = (await axios.get(`${URL}/${+id}`)).data;
    const character = {
      key: id,
      id: id,
      name,
      gender,
      status,
      image,
      species,
      origin
    };
    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  
  module.exports = {
    getCharById,
    getCharDetail,
  };
  
  