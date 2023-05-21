const express = require('express');
const Controller = require('../controllers/userController');

const router = express.Router();

router.post('/login', Controller.login);
router.post('/register', Controller.register);
router.get('/user', Controller.getDataUserByEmail);
router.put('/user/change_password', Controller.changePassword);
router.put('/user/change_data_user', Controller.changeDataUser);

module.exports = router;
