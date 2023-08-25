const { Favorite } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { id, name, gender, status, image, species, origin } = req.body;

    if (!id || !name || !gender || !status || !image || !species || !origin) {
      return res.status(400).send("faltan datos");
    }

    await Favorite.findOrCreate({
      where: {
        id: id,
        name: name,
        gender: gender,
        status: status,
        image: image,
        species: species,
        origin: origin,
      },
    });

    const allFavorites = await Favorite.findAll();

    return res.json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};







// let myFavorytes = [];

// const postFav = (req, res) => {
//   const character = req.body;

//   myFavorytes.push(character);

//   return res.status(200).json(myFavorytes);
// };

// const deleteFav = (req, res) => {
//   const { id } = req.params;

//   myFavorytes = myFavorytes.filter((favoryte) => favoryte.id !== id);
//   return res.status(200).json(myFavorytes);
// };

// module.exports = {
//   postFav,
//   deleteFav,
// };
