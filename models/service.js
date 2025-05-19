'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Service extends Model {
    static associate(models) {
        Service.hasMany(models.Command, {foreignKey: 'commandId'});
        Service.belongsTo(models.Client, { foreignKey: 'clientId' });
        Service.hasOne(models.ServiceInPlace, { foreignKey: 'serviceId' });
        Service.hasOne(models.ServiceDelivery, { foreignKey: 'serviceId' });
        Service.hasMany(models.CookerService, {foreignKey: 'serviceId'});
    }
  }

  Service.init(
    {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      bill: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      datetimeOpen: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      datetimeClose: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
      timestamps: false,
    }
  );

  return Service;
};