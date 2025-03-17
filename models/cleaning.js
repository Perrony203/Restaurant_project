'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cleaning extends Model {
    static associate(models) {
      Cleaning.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Cleaning.belongsToMany(models.SserviceInPlace, { through: 'cleaners' });
    }
  }

  Cleaning.init(
    {
        cleaningId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        },
    },
    {
      sequelize,
      modelName: "Cleaning",
      tableName: "cleanings",
      timestamps: true,
    }
  );

  return Cleaning;
};