'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category1.init({
    name: DataTypes.STRING,
    decription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category1',
  });
  return category1;
};