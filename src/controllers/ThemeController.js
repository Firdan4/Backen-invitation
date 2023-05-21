const { tema } = require('../models');

exports.getAllTheme = async (req, res, next) => {
  const data = await tema.findAll({});

  res.status(200).send({ message: 'Berhasil', data: data });
};

exports.getThemeById = async (req, res, next) => {
  const params = req.params;
  const data = await tema.findOne({
    where: { id: params.id },
  });

  if (!data) res.status(200).send('data tidak di temukan');

  res.status(200).send({ message: 'Berhasil', data: data });
};
