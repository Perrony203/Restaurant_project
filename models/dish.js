module.exports = (sequelize) => {
    class Dish extends Model {
      static associate(models) {
        Dish.belongsTo(models.Category, { foreignKey: 'categoryId'});
        Dish.hasMany(models.DishIngredient, { foreignKey: 'dishId'});
        Dish.hasMany(models.Command, { foreignKey: 'dishId'});
        Dish.hasMany(models.Image, {foreignKey: 'dishId'});
      }
    }
  
    Dish.init(
      {
        dishId: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        preparationTime: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Dish',
        tableName: 'dishes',
        timestamps: true,
      }
    );
  
    return Dish;
  };
  