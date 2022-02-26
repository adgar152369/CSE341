const express = require('express');

const profileController = require('../controllers/profile');

const router = express.Router();

router.get('/profile', profileController.getData);

module.exports = router;