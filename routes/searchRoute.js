const express = require('express');
const searchCtrl = require('../controllers/symbolSearchController');
const router = express.Router();
module.exports = router;

router.get('/live',  searchCtrl.searchLiveSymbol);
router.get('/historical',  searchCtrl.searchHistoricalSymbol);