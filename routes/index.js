const express = require('express');
const searchRoutes = require('./searchRoute');
const userRoutes = require('./usersRoute');
const apiconfigRoutes = require('./apiconfigRoute');
const router = express.Router();

router.use('/search', searchRoutes);
router.use("/users", userRoutes);
router.use("/apiconfig", apiconfigRoutes);

module.exports = router;