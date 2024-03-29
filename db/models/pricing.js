'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pricing.init({
    organizationId: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    zone: DataTypes.STRING,
    baseDistanceInKm: DataTypes.INTEGER,
    kmPrice: DataTypes.FLOAT,
    fixPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pricing',
  });
  return Pricing;
};