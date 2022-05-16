const express = require('express');
const searchCtrl = require('../controllers/symbolSearchController');
const router = express.Router();
module.exports = router;

router.get('/symbol',  searchCtrl.searchSymbol);