'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Table extends Model {
    static associate(models) {
      Table.hasMany(models.ServiceInPlace, { foreignKey: 'serviceId' });
    }
  }

  Table.init(
    {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
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