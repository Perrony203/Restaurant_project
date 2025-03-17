'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ServiceInPlace extends Model {
    static associate(models) {
      ServiceInPlace.belongsTo(models.Service, { foreignKey: 'serviceId' });
      ServiceInPlace.belongsTo(models.Table, { foreignKey: 'tableId' });
      ServiceInPlace.belongsTo(models.Waiter, { foreignKey: 'waiterId' });
      ServiceInPlace.belongsToMany(models.Cleaning, { through: 'cleaners' });
    }
  }

  ServiceInPlace.init(
    {
      inPlaceId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "ServiceInPlace",
      tableName: "servicesInPlace",
      timestamps: true,
    }
  );

  return ServiceInPlace;
};