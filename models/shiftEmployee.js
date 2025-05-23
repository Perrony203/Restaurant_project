'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ShiftEmployee extends Model {
    static associate(models) {
      ShiftEmployee.belongsTo(models.Shift, { foreignKey: 'shiftId' });
      ShiftEmployee.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    }
  }

  ShiftEmployee.init(
    {
      ShiftEmployeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      payments: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "ShiftEmployee",
      tableName: "contracts",
      timestamps: false,
    }
  );

  return ShiftEmployee;
};