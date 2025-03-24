'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Status extends Model {
    static associate(models) {
      Status.hasMany(models.serviceDelivery, { foreignKey: 'StatusId' });
    }
  }

  Status.init(
    {
      StatusId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      }
    },
    {
      sequelize,
      modelName: 'Status',
      tableName: 'statuses',
      timestamps: true,
    }
  );

  return Status;
};