'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('invitations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_user: {
        type: Sequelize.INTEGER,
      },
      id_tema: {
        type: Sequelize.INTEGER,
      },
      m_nama: {
        type: Sequelize.STRING,
      },
      m_panggilan: {
        type: Sequelize.STRING,
      },
      m_img_profile: {
        type: Sequelize.STRING,
      },
      m_anakke: {
        type: Sequelize.STRING,
      },
      m_namaibu: {
        type: Sequelize.STRING,
      },
      m_namaayah: {
        type: Sequelize.STRING,
      },
      f_nama: {
        type: Sequelize.STRING,
      },
      f_panggilan: {
        type: Sequelize.STRING,
      },
      f_img_profile: {
        type: Sequelize.STRING,
      },
      f_anakke: {
        type: Sequelize.STRING,
      },
      f_namaibu: {
        type: Sequelize.STRING,
      },
      f_namaayah: {
        type: Sequelize.STRING,
      },
      d_acara: {
        type: Sequelize.STRING,
      },
      d_tanggal: {
        type: Sequelize.STRING,
      },
      d_waktu: {
        type: Sequelize.STRING,
      },
      d_alamat: {
        type: Sequelize.STRING,
      },
      turut_mengundang: {
        type: Sequelize.STRING,
      },
      foto1: {
        type: Sequelize.STRING,
      },
      foto2: {
        type: Sequelize.STRING,
      },
      foto3: {
        type: Sequelize.STRING,
      },
      foto4: {
        type: Sequelize.STRING,
      },
      foto5: {
        type: Sequelize.STRING,
      },
      d_acara: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('invitations');
  },
};
