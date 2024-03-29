'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Bulk insert pricings
    return queryInterface.bulkInsert('Pricings', [
      {
        organizationId: 1,
        item_id: 1,
        zone: 'central',
        baseDistanceInKm: 5,
        kmPrice: 150,
        fixPrice: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organizationId: 1,
        item_id: 2,
        zone: 'central',
        baseDistanceInKm: 5,
        kmPrice: 100,
        fixPrice: 800,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        organizationId: 2,
        item_id: 3,
        zone: 'central',
        baseDistanceInKm: 5,
        kmPrice: 120,
        fixPrice: 1050,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organizationId: 2,
        item_id: 4,
        zone: 'central',
        baseDistanceInKm: 5,
        kmPrice: 130,
        fixPrice: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organizationId: 3,
        item_id: 5,
        zone: 'central',
        baseDistanceInKm: 5,
        kmPrice: 155,
        fixPrice: 1300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organizationId: 3,
        item_id: 6,
        zone: 'central',
        baseDistanceInKm: 5,
        kmPrice: 170,
        fixPrice: 1080,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Add more pricings as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Undo the bulk insert (delete all pricings)
    return queryInterface.bulkDelete('Pricings', null, {});
  }
};
