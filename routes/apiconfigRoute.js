const express = require('express');
const apiconfigCtrl = require('../controllers/apiConfigController');
const router = express.Router();
module.exports = router;

router.get('/all', apiconfigCtrl.getAllConfig);
router.get('/historical', apiconfigCtrl.getHistoricalConfig);
router.get('/live', apiconfigCtrl.getLiveConfig);