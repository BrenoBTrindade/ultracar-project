'use strict';

const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('services', {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
      },
      carModel: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('services'); 
  }
};
