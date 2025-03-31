'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Chef extends Model {
    static associate(models) {
      Chef.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Chef.hasMany(models.CookerService, {foreignKey: 'employeeId'});
    }
  }

  Chef.init(
    {
      employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
      sequelize,
      modelName: "Chef",
      tableName: "chefs",
      timestamps: false,
    },
    
  );

  return Chef;
};