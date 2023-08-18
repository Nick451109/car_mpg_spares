'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('carro', [

      {
        "descripcion": "amortiguadores"
      },
      {
        "descripcion": "bujias"
      }

    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('repuesto', null, {});
  }
};
