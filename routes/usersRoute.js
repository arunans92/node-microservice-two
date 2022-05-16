const express = require('express');
const usersCtrl = require('../controllers/usersController');
const router = express.Router();
module.exports = router;

router.get('/all', usersCtrl.getAllUsers);