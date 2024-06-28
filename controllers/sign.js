const router = require('express').Router();
const { wrap } = require('../common')
const { gen_session } = require('../middlewares/auth')

/*** */
const userProxy = require('../proxy/user');

/**提交注册信息 */
router.post('/signup', wrap(async (req, res, next) => {
    /*** validate */
    /*** duplicate */
    /*** create&save */
    /*** email  */
    const { username, password, rptpassword, email } = req.body;
    //
    if (!username || !password || !rptpassword || !email) {
        return res.status(500).send(`信息不完整`)
    }
    //
    try {
        const users = await userProxy.getUsersByQuery({
            $or: [{ 'loginname': username }, { 'email': email }]
        })
        if (users.length > 0) {
            return res.status(500).send(`用户名或邮箱已被使用`)
        }
    } catch (error) {
        // todo 
    }

    await userProxy.createUser(username, password, email, null, 0)
    res.status(200).send(`success`)
}));

/** signout */
router.post('signout', (req, res, next) => {
    req.session.destroy();
    res.clearCookie('token', { path: '/' });
    res.redirect('/');
})

router.post('/login', wrap(async (req, res, next) => {
    // params
    // validate  getUser->没找到或者psd不通过 
    // gen_session 
    // redirect 
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(500).send(`username or password required`)
    }
    const action = username.indexOf('@') != -1 ? 'getUserByEmail' : 'getUserByUserName';
    try {
        const user = await userProxy[action](username);
        if (!user || user.pass != password) {
            return res.status(500).send(`username or password is wrong`)
        }
        gen_session(username, res) // todo 
        res.redirect('/')
    } catch (error) {
    }
}));

// router.post('/login', sign.login);
// router.get('/active_account', sign.activeAccount);  //帐号激活

// router.post('/search_pass', sign.updateSearchPass);  // 更新密码
// router.post('/reset_pass', sign.updatePass);  // 更新密码

module.exports = router;