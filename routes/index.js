const express = require('express')
const router = express.Router();
const auth = require('../middlewares/auth')
const { wrapper } = require('../common/index')

const topic = require('../controllers/topic')
const reply = require('../controllers/reply')
const sign = require('../controllers/sign')

// sign controller
router.post('/signup', wrapper(sign.signup));  // 提交注册信息
router.post('/signout', wrapper(sign.signout));  // 登出
router.post('/signin', wrapper(sign.login));  // 登录校验
router.get('/active_account', wrapper(sign.activeAccount));  //帐号激活

// router.post('/search_pass', sign.updateSearchPass);  // 更新密码
// router.post('/reset_pass', sign.updatePass);  // 更新密码

// user controller
// router.get('/user/:name', user.index); // 用户个人主页
// router.get('/setting', auth.userRequired, user.showSetting); // 用户个人设置页
// router.post('/setting', auth.userRequired, user.setting); // 提交个人信息设置
// router.get('/stars', user.listStars); // 显示所有达人列表页
// router.get('/users/top100', user.top100);  // 显示积分前一百用户页
// router.get('/user/:name/collections', user.listCollectedTopics);  // 用户收藏的所有话题页
// router.get('/user/:name/topics', user.listTopics);  // 用户发布的所有话题页
// router.get('/user/:name/replies', user.listReplies);  // 用户参与的所有回复页
// router.post('/user/set_star', auth.adminRequired, user.toggleStar); // 把某用户设为达人
// router.post('/user/cancel_star', auth.adminRequired, user.toggleStar);  // 取消某用户的达人身份
// router.post('/user/:name/block', auth.adminRequired, user.block);  // 禁言某用户
// router.post('/user/:name/delete_all', auth.adminRequired, user.deleteAll);  // 删除某用户所有发言
// router.post('/user/refresh_token', auth.userRequired, user.refreshToken);  // 刷新用户token

// topic
router.post('/topic/create', auth.userRequired, wrapper(topic.create));
router.post('/topic/delete', auth.userRequired, wrapper(topic.delete));
router.post('/topic/update', auth.userRequired, wrapper(topic.update));
router.post('/topic/detail', auth.userRequired, wrapper(topic.detail));
router.post('/topic/list', auth.userRequired, wrapper(topic.list));
// router.post('/topic/:tid/top', auth.adminRequired, topic.top);  // 将某话题置顶
// router.post('/topic/:tid/good', auth.adminRequired, topic.good); // 将某话题加精
// router.post('/topic/:tid/lock', auth.adminRequired, topic.lock); // 锁定主题，不能再回复
// router.post('/topic/collect', auth.userRequired, topic.collect); // 关注某话题
// router.post('/topic/de_collect', auth.userRequired, topic.de_collect); // 取消关注某话题

//reply
router.post('/reply/create', auth.userRequired, wrapper(reply.create));
router.post('/reply/update', auth.userRequired, wrapper(reply.update));
router.post('/reply/delete', auth.userRequired, wrapper(reply.delete));
// router.post('/reply/:reply_id/up', auth.userRequired, reply.up); // 为评论点赞



module.exports = router;