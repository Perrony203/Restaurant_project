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
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
