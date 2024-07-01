const router = require('express').Router();
const { wrap } = require('../common')
const { gen_session } = require('../middlewares/auth')
const tools = require('../common/tools')
const utility = require('utility')
const mail = require('../common/mail');
const config = require('../config')
/*** */
const userProxy = require('../proxy/user');

/**提交注册信息 */
router.post('/signup', wrap(async (req, res, next) => {
    /*** validate todo */
    /*** duplicate */
    /*** create&save */
    /*** email  */
    const { username, password, rptpassword, email } = req.body;
    //
    if (!username || !password || !rptpassword || !email) {
        return res.status(500).send(`信息不完整`)
    }
    //
    const users = await userProxy.getUsersByQuery({
        $or: [{ 'loginname': username }, { 'email': email }]
    })

    if (users.length > 0) {
        return res.status(500).send(`用户名或邮箱已被使用`)
    }

    const passhash = await tools.bhash(password);
    await userProxy.createUser(username, passhash, email, null, 0)
    // 发送激活邮件 
    mail.sendActiveMail(email, utility.md5(email + passhash + config.session_secret), username);
    res.status(200).send('我们已给您的注册邮箱发送了一封邮件，请点击里面的链接来激活您的帐号。')
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
    const user = await userProxy[action](username);
    if (!user) {
        return res.status(500).send(`username or password is wrong`)
    }
    /**  */
    const equal = await tools.bcompare(password, user.pass);
    if (!equal) {
        return res.status(500).send(`username or password is wrong`)
    }
    gen_session(username, res) // todo 
    res.redirect('/')
}));

//帐号激活
router.get('/active_account', wrap(async (req, res, next) => {
    const { key, name } = req.query;
    if (!key || !name) {
        return res.status(500).send(`参数错误`)
    }
    const user = await userProxy.getUserByUserName(name);
    if (!user || key != utility.md5(user.email + user.pass + config.session_secret)) {
        return res.status(500).send(`用户不存在或参数错误`)
    }
    user.active = true;
    await user.save()
    res.status(200).send(`active_account success`)
}));



// router.post('/search_pass', sign.updateSearchPass);  // 更新密码
// router.post('/reset_pass', sign.updatePass);  // 更新密码

module.exports = router;