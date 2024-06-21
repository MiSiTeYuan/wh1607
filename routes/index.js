const express = require('express')
const router = express.Router();

// router.use('/user', require('../controllers/user'))
router.use('/user', require('../controllers/sign'))
router.use('/site', require('../controllers/site'))

module.exports = router;