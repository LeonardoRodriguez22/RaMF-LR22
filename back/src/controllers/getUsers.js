const { User } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("faltan datos buey");

    const users = await User.findAll({ were: { email, password } });

    if (!users) return res.status(404).send("usuario no encontrado");

    return  res.json(users)
     
  } catch (error) {
    return res.status(500).json(error.message);
  }
};