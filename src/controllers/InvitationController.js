const { invitation } = require('../models');
const { unlinkSync } = require('node:fs');

exports.CreateInvitation = async (req, res, next) => {
  const insertData = req.body;
  const insertfile = req.files;

  if (!insertData.m_nama || !insertData.f_nama)
    return res
      .status(400)
      .send({ message: 'nama pengantin pria dan wanita tidak boleh kosong' });

  if (!insertfile.m_img_profile || !insertfile.f_img_profile)
    return res
      .status(400)
      .send({ message: 'foto profile pria dan wanita tidak boleh kosong' });
  if (
    !insertfile.foto1 ||
    !insertfile.foto2 ||
    !insertfile.foto3 ||
    !insertfile.foto4 ||
    !insertfile.foto5
  )
    return res
      .status(400)
      .send({ message: 'foto galeri tidak boleh kosong tidak boleh kosong' });

  const imgMale = insertfile.m_img_profile[0];
  const imgFemale = insertfile.f_img_profile[0];
  const foto1 = insertfile.foto1[0];
  const foto2 = insertfile.foto2[0];
  const foto3 = insertfile.foto3[0];
  const foto4 = insertfile.foto4[0];
  const foto5 = insertfile.foto5[0];

  const makePathImgMale = '/theme/luxuri/' + imgMale.filename;
  const makePathImgFemale = '/theme/luxuri/' + imgFemale.filename;
  const makePathImgfoto1 = '/theme/luxuri/' + foto1.filename;
  const makePathImgfoto2 = '/theme/luxuri/' + foto2.filename;
  const makePathImgfoto3 = '/theme/luxuri/' + foto3.filename;
  const makePathImgfoto4 = '/theme/luxuri/' + foto4.filename;
  const makePathImgfoto5 = '/theme/luxuri/' + foto5.filename;

  try {
    const uploadDataInvitation = await invitation.create({
      id_user: insertData.id_user,
      id_tema: insertData.id_tema,
      m_nama: insertData.m_nama,
      m_panggilan: insertData.m_panggilan,
      m_img_profile: makePathImgMale,
      m_anakke: insertData.m_anakke,
      m_namaibu: insertData.m_namaibu,
      m_namaayah: insertData.m_namaayah,
      f_nama: insertData.f_nama,
      f_panggilan: insertData.f_panggilan,
      f_img_profile: makePathImgFemale,
      f_anakke: insertData.f_anakke,
      f_namaibu: insertData.f_namaibu,
      f_namaayah: insertData.f_namaayah,
      d_acara: insertData.d_acara,
      d_tanggal: insertData.d_tanggal,
      d_waktu: insertData.d_waktu,
      d_alamat: insertData.d_alamat,
      turut_mengundang: insertData.turut_mengundang,
      foto1: makePathImgfoto1,
      foto2: makePathImgfoto2,
      foto3: makePathImgfoto3,
      foto4: makePathImgfoto4,
      foto5: makePathImgfoto5,
    });

    res.status(200).send({
      message: 'data tema luxuri berhasil di upload',
      data: uploadDataInvitation,
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
    });
  }
};

exports.getDataInvitation = async (req, res, next) => {
  const paramsId = req.params;

  const findDataById = await invitation.findAll({
    where: { id_user: paramsId.id },
  });

  if (!findDataById)
    return res.status(404).send({ message: 'data tidak di temukan' });

  res.status(200).send({ message: 'data di temukan', data: findDataById });
};

exports.updateDataInvitation = async (req, res, next) => {
  const paramsId = req.params;
  const insertData = req.body;
  const insertfile = req.files;

  const findDataInvitation = await invitation.findOne({
    where: { id: paramsId.id },
  });

  if (!findDataInvitation)
    return res.status(404).send({ message: 'data tidak di temukan' });

  const dataInvitation = findDataInvitation.dataValues;

  if (!insertData.m_nama || !insertData.f_nama)
    return res
      .status(402)
      .send({ message: 'nama pengantin pria dan wanita tidak boleh kosong' });

  if (!insertfile.m_img_profile || !insertfile.f_img_profile)
    return res
      .status(402)
      .send({ message: 'foto profile pria dan wanita tidak boleh kosong' });
  if (
    !insertfile.foto1 ||
    !insertfile.foto2 ||
    !insertfile.foto3 ||
    !insertfile.foto4 ||
    !insertfile.foto5
  )
    return res
      .status(402)
      .send({ message: 'foto galeri tidak boleh kosong tidak boleh kosong' });

  const imgMale = insertfile.m_img_profile[0];
  const imgFemale = insertfile.f_img_profile[0];
  const foto1 = insertfile.foto1[0];
  const foto2 = insertfile.foto2[0];
  const foto3 = insertfile.foto3[0];
  const foto4 = insertfile.foto4[0];
  const foto5 = insertfile.foto5[0];

  const makePathImgMale = '/theme/luxuri/' + imgMale.filename;
  const makePathImgFemale = '/theme/luxuri/' + imgFemale.filename;
  const makePathImgfoto1 = '/theme/luxuri/' + foto1.filename;
  const makePathImgfoto2 = '/theme/luxuri/' + foto2.filename;
  const makePathImgfoto3 = '/theme/luxuri/' + foto3.filename;
  const makePathImgfoto4 = '/theme/luxuri/' + foto4.filename;
  const makePathImgfoto5 = '/theme/luxuri/' + foto5.filename;

  try {
    const updateDataInvitation = await invitation.update(
      {
        id_user: insertData.id_user,
        m_nama: insertData.m_nama,
        m_panggilan: insertData.m_panggilan,
        m_img_profile: makePathImgMale,
        m_anakke: insertData.m_anakke,
        m_namaibu: insertData.m_namaibu,
        m_namaayah: insertData.m_namaayah,
        f_nama: insertData.f_nama,
        f_panggilan: insertData.f_panggilan,
        f_img_profile: makePathImgFemale,
        f_anakke: insertData.f_anakke,
        f_namaibu: insertData.f_namaibu,
        f_namaayah: insertData.f_namaayah,
        d_acara: insertData.d_acara,
        d_tanggal: insertData.d_tanggal,
        d_waktu: insertData.d_waktu,
        d_alamat: insertData.d_alamat,
        turut_mengundang: insertData.turut_mengundang,
        foto1: makePathImgfoto1,
        foto2: makePathImgfoto2,
        foto3: makePathImgfoto3,
        foto4: makePathImgfoto4,
        foto5: makePathImgfoto5,
      },
      { where: { id: dataInvitation.id } }
    );

    unlinkSync(`'.' + ${dataInvitation.m_img_profile}`);
    unlinkSync(`'.' + ${dataInvitation.f_img_profile}`);
    unlinkSync(`'.' + ${dataInvitation.foto1}`);
    unlinkSync(`'.' + ${dataInvitation.foto2}`);
    unlinkSync(`'.' + ${dataInvitation.foto3}`);
    unlinkSync(`'.' + ${dataInvitation.foto4}`);
    unlinkSync(`'.' + ${dataInvitation.foto5}`);

    res.status(200).send({ message: 'data berhasil di update' });
  } catch (error) {
    res.status(500).send(error);
  }
};
