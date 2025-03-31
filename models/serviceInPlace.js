'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ServiceInPlace extends Model {
    static associate(models) {
      ServiceInPlace.belongsTo(models.Service, { foreignKey: 'serviceId' });
      ServiceInPlace.belongsTo(models.Table, { foreignKey: 'tableNumber' });
      ServiceInPlace.belongsTo(models.Waiter, { foreignKey: 'waiterId' });
      ServiceInPlace.hasMany(models.CleanerService, {foreignKey: 'serviceId'});
    }
  }

  ServiceInPlace.init(
    {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "ServiceInPlace",
      tableName: "inPlaceServices",
      timestamps: false,
    }
  );

  return ServiceInPlace;
};