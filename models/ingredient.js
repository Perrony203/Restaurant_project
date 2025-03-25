const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Ingredient extends Model {
      static associate(models) {
        Ingredient.hasMany(models.DishIngredient, { foreignKey: 'ingredientId' });
        Ingredient.belongsTo(models.Supplier, { foreignKey: 'supplierId' });
      }
    }
  
    Ingredient.init(
      {
        ingredientId: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allownull: false
        },
        stockUnits: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW 
        }
      },
      {
        sequelize,
        modelName: 'Ingredient',
        tableName: 'ingredients',
        timestamps: true,
      }
    );
  
    return Ingredient;
  };