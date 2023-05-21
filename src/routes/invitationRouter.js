const express = require('express');
const Controller = require('../controllers/InvitationController');

const router = express.Router();

// import multer
const multer = require('multer');

// add storage multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './theme/luxuri');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '_' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Upload Controler
const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
}).fields([
  { name: 'm_img_profile', maxCount: 1 },
  { name: 'f_img_profile', maxCount: 1 },
  { name: 'foto1', maxCount: 1 },
  { name: 'foto2', maxCount: 1 },
  { name: 'foto3', maxCount: 1 },
  { name: 'foto4', maxCount: 1 },
  { name: 'foto5', maxCount: 1 },
]);

router.post('/theme/luxuri/create', upload, Controller.CreateInvitation);
router.get('/theme/luxuri/:id', Controller.getDataInvitation);
router.put('/theme/luxuri/update/:id', upload, Controller.updateDataInvitation);

module.exports = router;
