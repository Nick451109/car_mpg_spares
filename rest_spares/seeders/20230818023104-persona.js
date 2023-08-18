'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('persona', [
      {
        "nombre":"Nick",
        "apellido":"Arevalo"
      },
      {
        "nombre": "Andres",
        "apellido": "Borbor"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('persona', null, {});
  }
};
