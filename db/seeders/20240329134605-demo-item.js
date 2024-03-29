'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Bulk insert items
    return queryInterface.bulkInsert('Items', [
      {
        type: 'perishable',
        description: 'It is Perishable item',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'non-perishable',
        description: 'It is Non-perishable item',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more items as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Undo the bulk insert (delete all items)
    return queryInterface.bulkDelete('Items', null, {});
  }
};
