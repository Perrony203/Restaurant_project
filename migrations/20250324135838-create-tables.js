'use strict';
//Modelo de la base de datos
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("categories", {
      categoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("chefs", {
      employeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    });
    await queryInterface.createTable("cleanings", {
      employeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    });
    await queryInterface.createTable("clients", {
      clientId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      idType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      }
    });
    await queryInterface.createTable("commands", {
      commandId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      datetimeOpen: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      datetimeClose: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
    await queryInterface.createTable("dishes", {
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      preparationTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      }
    });
    await queryInterface.createTable("dish_ingredient", {
      QuantityNeeded: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    await queryInterface.createTable("employees", {
      employeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      idType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      }
    });
    await queryInterface.createTable("evaluations", {
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
    });
    await queryInterface.createTable("ingredients", {
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
    });
    await queryInterface.createTable("services", {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      bill: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      datetimeOpen: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      datetimeClose: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
    await queryInterface.createTable("deliveryServices", {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("inPlaceServices", {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    });
    await queryInterface.createTable("shifts", {
      shiftId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      datetimeOpen: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      datetimeClose: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
    await queryInterface.createTable("contracts", {
      ShiftEmployeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      payments: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    await queryInterface.createTable("statuses", {
      StatusId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
      }
    });
    await queryInterface.createTable("suppliers", {
      supplierId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
    await queryInterface.createTable("tables", {
      tableNumber: {
        type: DataTypes.STRING,
        allowNull: false,        
        primaryKey:true,
      },
      vacancy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
    await queryInterface.createTable("waiters", {
      employeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("categories");
    await queryInterface.dropTable("chefs");
    await queryInterface.dropTable("cookers");
    await queryInterface.dropTable("cleanings");
    await queryInterface.dropTable("cleaners");
    await queryInterface.dropTable("clients");
    await queryInterface.dropTable("commands");
    await queryInterface.dropTable("dishes");
    await queryInterface.dropTable("dish_ingredient");
    await queryInterface.dropTable("employees");
    await queryInterface.dropTable("evaluations");
    await queryInterface.dropTable("ingredients");
    await queryInterface.dropTable("services");
    await queryInterface.dropTable("deliveryServices");
    await queryInterface.dropTable("inPlaceServices");
    await queryInterface.dropTable("shifts");
    await queryInterface.dropTable("contracts");
    await queryInterface.dropTable("statuses");
    await queryInterface.dropTable("suppliers");
    await queryInterface.dropTable("tables");
    await queryInterface.dropTable("waiters");
  },
};
// Cada que se hace una migración se hace la comparación con cads una de las anteriores
 