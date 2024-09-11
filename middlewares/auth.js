/***  */
const logger = require('../common/logger')
const crypto = require('crypto');

const path = require('path');
const { getAllLines, appendLine } = require('../common/txtUtil')
const userDbPath = path.resolve(__dirname, '../', 'db/user.txt')

const Hmac = (val, secret) => {
    secret = secret || 'abcd'
    const hmac = crypto.createHmac('sha256', secret)
        .update(val)
        .digest('Base64');
    return hmac;
}

function gen_session(user, res) {
    var auth_token = user + '$$$$'; // 以后可能会存储更多信息，用 $$$$ 来分隔
    var opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true
    };
    res.cookie('token', auth_token, opts); //cookie 有效期30天
}

async function auth(req, res, next) {
    /*** */
    if (req.session.user) {
        console.log("req.session.user", req.session.user);
        next();
    } else {
        const authCookie = req.signedCookies.token;
        if (!authCookie) {
            return next()
        }
        //
        const arr = authCookie.split('$$$$');
        const username = arr[0];
        const records = await getAllLines(userDbPath)
        const user = records.find(item => item.username == username);

        if (!user) {
            console.log("auth no user", user);
            return next();
        }
        // user = res.locals.current_user = req.session.user = new UserModel(user);
        req.session.user = user;

        // if (config.admins.hasOwnProperty(user.loginname)) {
        //     user.is_admin = true;
        // }

        // Message.getMessagesCount(user._id, ep.done(function (count) {
        //     user.messages_count = count;
        //     next();
        // }));
        next();
    }
}


function userRequired (req, res, next) {
    next();
}

function adminRequired(req, res, next) {
    next();
}

module.exports = {
    gen_session,
    auth,
    userRequired,
    adminRequired
}