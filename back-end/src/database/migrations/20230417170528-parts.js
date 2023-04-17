'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('parts', {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false, 
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('parts');
    
  }
};
