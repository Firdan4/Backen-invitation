const { user } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  const insertData = req.body;
  if (
    !insertData.email ||
    !insertData.nama_pria ||
    !insertData.nama_wanita ||
    !insertData.password
  )
    return res.status(403).send({ message: 'Data tidak boleh kosong' });

  const cekConflicEmail = await user.findOne({
    where: { email: insertData.email },
  });

  if (cekConflicEmail)
    return res.status(402).send({ message: 'Email sudah di gunakan' });

  try {
    const hashPassword = bcrypt.hashSync(insertData.password, 8);

    const createUser = await user.create({
      email: insertData.email,
      nama_pria: insertData.nama_pria,
      nama_wanita: insertData.nama_wanita,
      password: hashPassword,
    });
    res.status(200).send({ message: 'Berhasil di daftarkan' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.login = async (req, res, next) => {
  const insertData = req.body;

  const Users = await user.findOne({
    where: { email: insertData.email },
  });

  if (!Users)
    return res.status(404).send({ message: 'email atau password salah' });

  const dataUser = Users.dataValues;

  const comparePassword = bcrypt.compareSync(
    insertData.password,
    dataUser.password
  );

  if (!comparePassword)
    return res.status(404).send({ message: 'email atau password salah' });

  const token = jwt.sign(
    {
      id: dataUser.id,
      email: dataUser.email,
    },
    process.env.JWT_SECRET
  );

  res.status(200).send({
    message: 'login berhasil',
    token: token,
  });
};

exports.getDataUserByEmail = async (req, res, next) => {
  const queryEmail = req.query.email;

  const findUser = await user.findOne({
    where: { email: queryEmail },
  });

  if (!findUser) res.status(400).send('data tidak di temukan');
  res.status(200).send({ message: 'Berhasil', data: findUser.dataValues });
};

exports.changePassword = async (req, res, next) => {
  const insertData = req.body;

  if (!insertData.passwordBaru || !insertData.passwordLama)
    res
      .status(400)
      .send({ message: 'Password Lama dan Password Baru tidak boleh kosong' });

  const Users = await user.findOne({
    where: { email: insertData.email },
  });

  if (!Users) return res.status(404).send({ message: 'Data tidak ditemukan' });

  const dataUser = Users.dataValues;

  const comparePassword = bcrypt.compareSync(
    insertData.passwordLama,
    dataUser.password
  );

  if (!comparePassword)
    return res.status(404).send({ message: 'Password lama tidak sesuai' });

  const hashPassword = bcrypt.hashSync(insertData.passwordBaru, 8);

  try {
    const update = await user.update(
      { password: hashPassword },
      { where: { id: dataUser.id } }
    );

    res.status(200).send({
      message: 'Berhasil memperbarui password',
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.changeDataUser = async (req, res, next) => {
  const insertData = req.body;

  if (!insertData.namaPria || !insertData.namaWanita || !insertData.emailBaru)
    res
      .status(400)
      .send({ message: 'Tidak ada perubahan pada Nama pria dan nama wanita' });

  const Users = await user.findOne({
    where: { email: insertData.email },
  });

  if (!Users) return res.status(404).send({ message: 'Data tidak ditemukan' });

  const dataUser = Users.dataValues;

  try {
    const update = await user.update(
      {
        email: insertData.emailBaru,
        nama_pria: insertData.namaPria,
        nama_wanita: insertData.namaWanita,
      },
      { where: { id: dataUser.id } }
    );

    const Users = await user.findOne({
      where: { email: insertData.emailBaru },
    });

    res.status(200).send({
      message: 'Berhasil memperbarui data',
      data: Users,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
