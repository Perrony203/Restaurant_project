'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ServiceDelivery extends Model {
    static associate(models) {
      ServiceDelivery.belongsTo(models.Service, { foreignKey: 'serviceId' });
      ServiceDelivery.belongsTo(models.State, { foreignKey: 'stateId' });
    }
  }

  ServiceDelivery.init(
    {
      deliceryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ServiceDelivery",
      tableName: "servicesDelivery",
      timestamps: true,
    }
  );

  return ServiceDelivery;
};