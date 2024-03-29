'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Bulk insert organizations
    return queryInterface.bulkInsert('Organizations', [
      {
        name: 'Organization 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Organization 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Organization 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Organization 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Organization 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more organizations as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Undo the bulk insert (delete all organizations)
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};
