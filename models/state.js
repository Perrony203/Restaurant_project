'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class State extends Model {
    static associate(models) {
      State.hasMany(models.serviceDelivery, { foreignKey: 'StateId' });
    }
  }

  State.init(
    {
      StateId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'State',
      tableName: 'states',
      timestamps: true,
    }
  );

  return State;
};