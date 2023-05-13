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
    res.status(400).send(error);
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
