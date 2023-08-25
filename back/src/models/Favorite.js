const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNul: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNul: false,
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        allowNul: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNul: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNul: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNul: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNul: false,
      },
    },
    { timestamps: false }
  );
};
