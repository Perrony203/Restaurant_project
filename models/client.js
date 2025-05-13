'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.Service, { foreignKey: 'clientId' });
      Client.hasMany(models.Evaluation, { foreignKey: 'clientId' });
    }
  }

  Client.init(
    {
      clientId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      idType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      }
    },
    {
      sequelize,
      modelName: "Client",
      tableName: "clients",
      timestamps: true,
    }
  );

  return Client;
};
