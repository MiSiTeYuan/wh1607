const router = require('express').Router();

router.get('/index', (req, res, next) => {

    if (req.session.user) {
        res.send(`index`);
    } else {
        res.send('to login')
    }
})


module.exports = router;
