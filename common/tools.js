var bcrypt = require('bcryptjs');
var moment = require('moment');
var { mayJunPromisify } = require('./promisify');
moment.locale('zh-cn'); // 使用中文

// 格式化时间
exports.formatDate = function (date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }

};

exports.validateId = function (str) {
  return (/^[a-zA-Z0-9\-_]+$/i).test(str);
};

exports.bhash = mayJunPromisify(function (str, callback) {
  bcrypt.hash(str, 10, callback);
})

exports.bcompare = mayJunPromisify(function (str, hash, callback) {
  bcrypt.compare(str, hash, callback);
})

//
// async function test() {
//   const res = await exports.bhash('123456');
//   console.log(res)
//   const res2 = await exports.bcompare('123456', res)
//   console.log(res2)
// }

// test();

