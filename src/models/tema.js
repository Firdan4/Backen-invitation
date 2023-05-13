'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tema.init(
    {
      id_tema: DataTypes.INTEGER,
      nama_tema: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'tema',
    }
  );
  return tema;
};
