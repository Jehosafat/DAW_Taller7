'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('usuarios', {
      fields: ['id_perfil'],
      type: 'foreign key',
      name: 'id_perfil_fk',
      references: {
        table: 'perfiles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('usuarios', 'id_perfil_fk');
  }
};
