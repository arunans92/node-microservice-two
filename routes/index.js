const express = require('express');
const searchRoutes = require('./searchRoute');
const userRoutes=require('./usersRoute')
const router = express.Router();

router.use('/search', searchRoutes);
router.use("/users",userRoutes);

module.exports = router;