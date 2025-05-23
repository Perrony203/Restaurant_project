'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasMany(models.ShiftEmployee, { foreignKey: 'employeeId' });
      Employee.hasOne(models.Chef, { foreignKey: 'employeeId'});
      Employee.hasOne(models.Waiter, { foreignKey: 'employeeId'});
      Employee.hasOne(models.Cleaning, { foreignKey: 'employeeId'});
    }
  }

  Employee.init(
    {
      employeeId: {
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
      modelName: "Employee",
      tableName: "employees",
      timestamps: true,
    }
  );

  return Employee;
};
