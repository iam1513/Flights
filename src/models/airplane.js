"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING, // Done manually acc to seq docs
        allowNull: false, // Done manually acc to seq docs// Error 1 because did not initialize with deafult values
        validate: {
          isAlphanumeric: true,
        },
      },
      // capacity: DataTypes.INTEGER // Only this much will be created by command
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Error 1 because did not initialize with deafult values
        validate: {
          max: 1000,
        },
      },
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );
  return Airplane;
};
