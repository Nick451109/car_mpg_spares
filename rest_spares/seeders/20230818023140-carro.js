'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('carro', [

    {
      "placa":"GSE-3087",
      "modelo": "sail",
      "marca": "chevrolet",
      "anio": "2012",
      "kmgal":"60",
      "persona_idpersona": 1,
     },
     {
      "placa":"GPX-2320",
      "modelo": "camaro",
      "marca": "chevrolet",
      "anio": "2012",
      "kmgal":"22",
      "persona_idpersona": 2,
     }

   ])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('carro', null, {});
  }
};
