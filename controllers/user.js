const router = require('express').Router();

router.post('/list', async (req, res, next) => {
    res.send('user list')
})

module.exports = router;
