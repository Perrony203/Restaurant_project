'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class DishIngredient extends Model {
    static associate(models) {
      DishIngredient.belongsTo(models.Dish, { foreignKey: 'dishId' });
      DishIngredient.belongsTo(models.Ingredient, { foreignKey: 'ingredientId' });
    }
  }

  DishIngredient.init(
    {
      QuantityNeeded: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "DishIngredient",
      tableName: "dish_ingredient",
      timestamps: false,
    }
  );

  return DishIngredient;
};
