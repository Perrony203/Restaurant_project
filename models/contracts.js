'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Contract extends Model {
    static associate(models) {
      Contract.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Contract.belongsTo(models.Shift, { foreignKey: 'shiftId' });
    }
  }

  Contract.init(
    {
      employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      shiftId: {
        type: DataTypes.UUID,
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
      modelName: "Contract",
      tableName: "contracts",
      timestamps: true,
    }
  );

  return Contract;
};