'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Cleaning extends Model {
    static associate(models) {
      Cleaning.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Cleaning.belongsToMany(models.ServiceInPlace, { through: 'cleanerServices', foreignKey: 'employeeId'});
    }
  }

  Cleaning.init(
    {
      employeeId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Cleaning",
      tableName: "cleanings",
      timestamps: false,
    }
  );

  return Cleaning;
};