'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ServiceDelivery extends Model {
    static associate(models) {
      ServiceDelivery.belongsTo(models.Service, { foreignKey: 'serviceId' });
      ServiceDelivery.belongsTo(models.Status, { foreignKey: 'StatusId' });
    }
  }

  ServiceDelivery.init(
    {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      StatusId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Status',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: "ServiceDelivery",
      tableName: "deliveryServices",
      timestamps: false,
    }
  );

  return ServiceDelivery;
};