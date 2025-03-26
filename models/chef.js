'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Chef extends Model {
    static associate(models) {
      Chef.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Chef.hasMany(models.CookerService, {foreignKey: 'employeeId'});
    }
  }

  Chef.init(
    {
    },
    {
      sequelize,
      modelName: "Chef",
      tableName: "chefs",
      timestamps: false,
    }
  );

  return Chef;
};