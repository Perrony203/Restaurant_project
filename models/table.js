'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Table extends Model {
    static associate(models) {
      Table.hasMany(models.ServiceInPlace, { foreignKey: 'tableNumber' });
    }
  }

  Table.init(
    {
      tableNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,        
        primaryKey:true,
        autoIncrement:true
      },
      vacancy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Table",
      tableName: "tables",
      timestamps: false,
    }
  );

  return Table;
};