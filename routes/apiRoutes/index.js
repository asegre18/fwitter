const router = require('express').Router();
const userRoutes = require('./userRoutes');

// api prepended to every route
router.use('/users', userRoutes);

module.exports = router;
