const express = require('express')
const router = express.Router();

router.use('/user', require('../controllers/user'))
router.use('/user', require('../controllers/sign'))

module.exports = router;