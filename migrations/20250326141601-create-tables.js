'use strict';
//Modelo de la base de datos
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("categories", {
      categoryId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("employees", {
      employeeId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      idType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
      }
    });
    await queryInterface.createTable("clients", {
      clientId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      idType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
      }
    });    
    await queryInterface.createTable("suppliers", {
      supplierId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
    await queryInterface.createTable("shifts", {
      shiftId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      datetimeOpen: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      datetimeClose: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
    await queryInterface.createTable("statuses", {
      StatusId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
      }
    });    
    await queryInterface.createTable("tables", {
      tableNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        primaryKey:true,
        autoIncrement:true
      },
      vacancy: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
    await queryInterface.createTable("waiters", {
      employeeId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'employees',
          key: 'employeeId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
    });
    await queryInterface.createTable("ingredients", {
      ingredientId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      supplierId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: false,
        references: {
          model: 'suppliers',
          key: 'supplierId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allownull: false
      },
      stockUnits: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
      }
    });    
    await queryInterface.createTable("services", {
      serviceId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      clientId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'clientId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      bill: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      datetimeOpen: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      datetimeClose: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
    await queryInterface.createTable("chefs", {
      employeeId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'employees',
          key: 'employeeId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
    });
    await queryInterface.createTable("cleanings", {
      employeeId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'employees',
          key: 'employeeId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
    });   
    await queryInterface.createTable("dishes", {
      dishId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'categoryId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      preparationTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
      }
    }); 
    await queryInterface.createTable("images", {
      dishId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'dishes',
          key: 'dishId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("commands", {      
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'services',
          key: 'serviceId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
      dishId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'dishes',
          key: 'dishId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
      datetimeOpen: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.NOW,
      },
      datetimeClose: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });    
    await queryInterface.createTable("dish_ingredient", {
      dishId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'dishes',
          key: 'dishId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
      ingredientId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'ingredients',
          key: 'ingredientId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
      QuantityNeeded: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });    
    await queryInterface.createTable("evaluations", {
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.NOW
      },
      clientId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'clients',
          key: 'clientId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      food: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      service: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cleaning: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });    
    await queryInterface.createTable("deliveryServices", {
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'services',
          key: 'serviceId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      statusId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'statuses',
          key: 'statusId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      Code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("inPlaceServices", {
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'services',
          key: 'serviceId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION',
      },
      tableNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tables',
          key: 'tableNumber',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      waiterId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'waiters',
          key: 'employeeId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      
    });    
    await queryInterface.createTable("contracts", {
      employeeId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'employees',
          key: 'employeeId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      shiftId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'shifts',
          key: 'shiftId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      payments: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });    
    await queryInterface.createTable("cleanerServices", {
      cleanerId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'cleanings',
          key: 'employeeId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'inPlaceServices',
          key: 'serviceId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
    });
    await queryInterface.createTable("cookerServices", {
      cookerId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'chefs',
          key: 'employeeId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'services',
          key: 'serviceId',
        },
        onUpdate: 'NO ACTION', 
        onDelete: 'NO ACTION', 
      },
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("categories");
    await queryInterface.dropTable("chefs");
    await queryInterface.dropTable("cleanings");
    await queryInterface.dropTable("clients");
    await queryInterface.dropTable("commands");
    await queryInterface.dropTable("dishes");
    await queryInterface.dropTable("dish_ingredient");
    await queryInterface.dropTable("employees");
    await queryInterface.dropTable("evaluations");
    await queryInterface.dropTable("images");
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
    await queryInterface.dropTable("cleanerServices");
    await queryInterface.dropTable("cookerServices");
  },
};

