'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let perfiles = ['Admin', 'Supervisor', 'Operador', 'Cliente']
    let estados = ['Estado 1', 'Estado 2', 'Estado 3', 'Estado 4']
    
    for(let perfil of perfiles) {
      await queryInterface.bulkInsert('perfiles', [{
        descripcion: perfil,
        estado: estados[Math.floor(Math.random() * estados.length)],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfiles', null, {});
  }
};
