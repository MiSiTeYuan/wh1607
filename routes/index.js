const express = require('express')
const router = express.Router();

// router.use('/user', require('../controllers/user'))
router.use('/user', require('../controllers/sign'))
router.use('/site', require('../controllers/site'))
router.use('/topic', require('../controllers/topic'))

module.exports = router;