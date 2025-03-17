'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Command extends Model {
    static associate(models) {
      Command.belongsTo(models.Service, { foreignKey: 'serviceId' });
      Command.belongsTo(models.Dish, { foreignKey: 'dishId' });
    }
  }

  CommandInPlace.init(
    {
      commandId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      datetimeOpen: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      datetimeClose: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Command",
      tableName: "commands",
      timestamps: true,
    }
  );

  return Command;
};