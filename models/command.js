'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Command extends Model {
    static associate(models) {
      Command.belongsTo(models.Service, { foreignKey: 'serviceId' });
      Command.belongsTo(models.Dish, { foreignKey: 'dishId' });
    }
  }

  Command.init(
    {
      datetimeOpen: {
        type: DataTypes.DATE,
        primaryKey: true,
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
      modelName: "Command",
      tableName: "commands",
      timestamps: true,
    }
  );

  return Command;
};