'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('chefs', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('clients', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('employees', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('waiters', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('chefs', 'password');
    await queryInterface.removeColumn('clients', 'password');
    await queryInterface.removeColumn('employees', 'password'); 
    await queryInterface.removeColumn('waiters', 'password');
  }
};