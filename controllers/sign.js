const router = require('express').Router();
const path = require('path')
const { wrap } = require('../common')
const { getAllLines, appendLine } = require('../common/txtUtil')
const userDbPath = path.resolve(__dirname, '../', 'db/user.txt')

/**提交注册信息 */
router.post('/signup', wrap(async (req, res, next) => {
    /*** validate */
    /*** duplicate */
    /*** create&save */
    /*** email  */
    const { username, password, rptpassword, email, } = req.body;
    //
    if (!username || !password || !rptpassword || !email) {
        return res.status(500).send(`信息不完整`)
    }
    //
    const records = await getAllLines(userDbPath)
    if (records.findIndex(item => item.username == username) >= 0) {
        return res.status(500).send(`已存在`)
    }
    const newRecord = { username, password, rptpassword, email }
    await appendLine(userDbPath, newRecord);
    res.status(200).send(`success`)
}));

/** signout */
router.post('signout', (req, res, next) => {
    // req.session.destroy();
    // res.clearCookie(config.auth_cookie_name, { path: '/' });
    // res.redirect('/');
    next('signout')
})

router.post('/login', (req, res, next) => {
    // params
    // validate  getUser->没找到或者psd不通过 
    // gen_session 
    // redirect 
    next()
});

// router.post('/login', sign.login);
// router.get('/active_account', sign.activeAccount);  //帐号激活

// router.post('/search_pass', sign.updateSearchPass);  // 更新密码
// router.post('/reset_pass', sign.updatePass);  // 更新密码

module.exports = router;