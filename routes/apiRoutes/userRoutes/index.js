const router = require('express').Router();

// /api/users prepended to every route
router.route('/')
  .get((_req, res) => {
    res.send('Hello');
  });

module.exports = router;
