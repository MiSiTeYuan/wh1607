const router = require('express').Router();
// middleware to test if authenticated
function isAuthenticated(req, res, next) {
    if (req.session.userId) next()
    else res.status(400).json('authFail')
}

router.post('/list', isAuthenticated, async (req, res, next) => {
    console.log(req.session.userId)
    res.send(`list`);
})


router.post('/login', async (req, res, next) => {
    req.session.userId = req.session.userId || new Date().getTime();
    res.send(`Session started for user ID: ${req.session.userId}`);
})


router.post('/loginOut', async (req, res, next) => {
    req.session.userId = null;
    res.send('loginOut')
})

module.exports = router;
