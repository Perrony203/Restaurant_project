'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    class Evaluation extends Model {
      static associate(models) {        
        Evaluation.belongsTo(models.Client, { foreignKey: 'clientId' });
      }
    }
  
    Evaluation.init(
      {
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          primaryKey: true,
          defaultValue: DataTypes.NOW
        },
        clientId: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        food: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        service: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        cleaning: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Evaluation',
        tableName: 'evaluations',
        timestamps: true,
      }
    );
  
    return Evaluation;
  };