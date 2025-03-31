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
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
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