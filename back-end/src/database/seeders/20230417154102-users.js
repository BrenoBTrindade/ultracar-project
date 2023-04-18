'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'pedro',
        role: 'customer'
      },
      {
        username: 'joão',
        role: 'employee'
      },
      {
        username: 'maria',
        role: 'employee'
      },
      {
        username: 'ana',
        role: 'customer'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('users', null, {});
    
  }
};
