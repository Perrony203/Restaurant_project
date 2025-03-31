'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CookerService extends Model {
    static associate(models) {
      CookerService.belongsTo(models.Service, { foreignKey: 'serviceId' });
      CookerService.belongsTo(models.Chef, { foreignKey: 'employeeId' });
    }
  }

  CookerService.init(
    {
    },
    {
      sequelize,
      modelName: "CookerService",
      tableName: "CookerServices",
      timestamps: true,
    }
  );

  return CookerService;
};