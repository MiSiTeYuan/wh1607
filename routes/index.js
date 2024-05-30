const express = require('express')
const router = express.Router();

router.use('/user', require('../controllers/user'))

module.exports = router;