'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('parts', [
      {
        name: 'pneu',
        price: 200
      },
      {
        name: 'radiador',
        price: 400
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('parts', null, {});   
  }
};
