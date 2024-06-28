const User = require('../models/user')
const uuid = require('node-uuid');
/***  */
exports.getUserById = (userId) => {
    return User.findOne({ _id: userId })
}

/** */
exports.getUserByUserName = (loginName) => {
    return User.findOne({ 'loginname': new RegExp('^' + loginName + '$', "i") });
}

exports.getUserByEmail = (email) => {
    return User.findOne({ email: email });
}

exports.getUsersByQuery = function (query, opt) {
    return User.find(query, opt)
}

exports.getUserList = function () {
    return User.find()
}

exports.createUser = function (loginname, pass, email, avatar_url, active) {
    var user = new User();
    user.name = loginname;
    user.loginname = loginname;
    user.pass = pass;
    user.email = email;
    user.avatar = avatar_url;
    user.active = active || false;
    user.accessToken = uuid.v4();

    return user.save();
}

exports.updateUser = function (filter, user) {
    return User.updateOne(filter, user)
}