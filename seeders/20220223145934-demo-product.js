'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      productName: 'lush 2',
      quantity: 10,
      price: 3000.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'colt 1911',
      quantity: 1,
      price: 6000.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};