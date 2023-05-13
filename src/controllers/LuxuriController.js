exports.CreateInvitation = async (req, res, next) => {
  const insertData = req.body;
  const insertfile = req.files;

  if (!insertData.m_nama || !insertData.f_nama)
    return res
      .status(402)
      .send({ message: 'nama pengantin pria dan wanita tidak boleh kosong' });

  if (!insertfile.m_img_profile || !insertfile.f_img_profile)
    return res
      .status(402)
      .send({ message: 'foto profile pria dan wanita tidak boleh kosong' });

  const imgMale = insertfile.m_img_profile[0];
  const imgFemale = insertfile.f_img_profile[0];
};
