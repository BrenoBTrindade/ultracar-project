'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('services', [
      {
        carModel: 'fusca',
        employeeId: 2,
        customerId: 1,
        description: 'troca de pneu',
        totalPrice: 250,
      },
      {
        carModel: 'fusca',
        employeeId: 2,
        customerId: 1,
        description: 'radiador',
        totalPrice: 450,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
