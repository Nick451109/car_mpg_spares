'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('repuesto', [
    {
      idrepuesto : 1,
      descripcion : 'Descripcion repuesto 1'
    },{
      idrepuesto: 2,
      descripcion : 'Descripcion de repuesto 2',
    }
   ], 
   {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('repuesto', null, {});
  }
};
