'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Shift extends Model {
    static associate(models) {
     Shift.hasMany(models.ShiftEmployee, { foreignKey: 'shiftId'});
    }
  }

  Shift.init(
    {
      shiftId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      datetimeOpen: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      datetimeClose: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Shift",
      tableName: "shifts",
      timestamps: true,
    }
  );

  return Shift;
};