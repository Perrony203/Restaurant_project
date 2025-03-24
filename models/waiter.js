'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Waiter extends Model {
    static associate(models) {
      Waiter.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Waiter.hasMany(models.ServiceInPlace, { foreignKey: 'waiterId' });
    }
  }

  Waiter.init(
    {
        employeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        },
    },
    {
      sequelize,
      modelName: "Waiter",
      tableName: "waiters",
      timestamps: false,
    }
  );

  return Waiter;
};