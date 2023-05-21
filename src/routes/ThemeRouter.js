const express = require('express');
const Controller = require('../controllers/ThemeController');

const router = express.Router();

router.get('/alltheme', Controller.getAllTheme);
router.get('/theme/:id', Controller.getThemeById);

module.exports = router;
