'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Obtener todos los IDs de los perfiles disponibles
    const [perfiles] = await queryInterface.sequelize.query('SELECT id FROM perfiles');
    
    // Verificar que hay perfiles disponibles
    if (perfiles.length === 0) {
      throw new Error('No hay perfiles disponibles para asignar a los usuarios.');
    }

    // Crear un array para almacenar los usuarios
    const usuarios = [];
    
    // Crear 20 usuarios con perfiles aleatorios
    for (let i = 0; i < 20; i++) {
      const id_perfil = perfiles[Math.floor(Math.random() * perfiles.length)].id;
      usuarios.push({
        nombre: `Usuario ${i}`,
        apellido: `Apellido del Usuario ${i}`,
        id_perfil: id_perfil,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Insertar todos los usuarios de una vez
    await queryInterface.bulkInsert('usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

