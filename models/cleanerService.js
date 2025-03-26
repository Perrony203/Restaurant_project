'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CleanerService extends Model {
    static associate(models) {
      CleanerService.belongsTo(models.ServiceInPlace, { foreignKey: 'serviceId' });
      CleanerService.belongsTo(models.Cleaning, { foreignKey: 'employeeId' });
    }
  }

  CleanerService.init(
    {
    },
    {
      sequelize,
      modelName: "CleanerService",
      tableName: "cleanerServices",
      timestamps: true,
    }
  );

  return CleanerService;
};