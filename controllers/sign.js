const router = require('express').Router();

/**提交注册信息 */
router.post('/signup', (req, res, next) => {
    next('signup')
    /*** validate */
    /*** duplicate */
    /*** create&save */
    /*** email  */
});

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