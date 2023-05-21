'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invitation.init(
    {
      id_user: DataTypes.INTEGER,
      id_tema: DataTypes.INTEGER,
      m_nama: DataTypes.STRING,
      m_panggilan: DataTypes.STRING,
      m_img_profile: DataTypes.STRING,
      m_anakke: DataTypes.STRING,
      m_namaibu: DataTypes.STRING,
      m_namaayah: DataTypes.STRING,
      f_nama: DataTypes.STRING,
      f_panggilan: DataTypes.STRING,
      f_img_profile: DataTypes.STRING,
      f_anakke: DataTypes.STRING,
      f_namaibu: DataTypes.STRING,
      f_namaayah: DataTypes.STRING,
      d_acara: DataTypes.STRING,
      d_tanggal: DataTypes.STRING,
      d_waktu: DataTypes.STRING,
      d_alamat: DataTypes.STRING,
      turut_mengundang: DataTypes.STRING,
      foto1: DataTypes.STRING,
      foto2: DataTypes.STRING,
      foto3: DataTypes.STRING,
      foto4: DataTypes.STRING,
      foto5: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'invitation',
    }
  );
  return invitation;
};
