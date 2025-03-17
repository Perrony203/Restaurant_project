'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Chef extends Model {
    static associate(models) {
      Chef.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      Chef.belongsToMany(models.Service, { through: 'cookers' });
    }
  }

  Chef.init(
    {
        chefId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        },
    },
    {
      sequelize,
      modelName: "Chef",
      tableName: "chefs",
      timestamps: true,
    }
  );

  return Chef;
};