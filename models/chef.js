'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Chef extends Model {
    static associate(models) {
      Chef.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Chef.belongsToMany(models.Service, { through: 'cookerService', foreignKey: 'employeeId'});
    }
  }

  Chef.init(
    {
      employeeId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Chef",
      tableName: "chefs",
      timestamps: false,
    }
  );

  return Chef;
};