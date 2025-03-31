'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    class Image extends Model {
      static associate(models) {        
        Image.belongsTo(models.Dish, { foreignKey: 'dishId' });
      }
    }
  
    Image.init(
      {        
        imageId: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Image',
        tableName: 'images',
        timestamps: true,
      }
    );
  
    return Image;
  };