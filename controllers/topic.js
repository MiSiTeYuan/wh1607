const router = require('express').Router();
const { query } = require('express');
const { wrap } = require('../common')
const topicProxy = require('../proxy/topic')
/**
 * // topic

// 新建文章界面
 
router.get('/topic/:tid', topic.index);  // 显示某个话题
router.post('/topic/:tid/top', auth.adminRequired, topic.top);  // 将某话题置顶
router.post('/topic/:tid/good', auth.adminRequired, topic.good); // 将某话题加精
router.get('/topic/:tid/edit', auth.userRequired, topic.showEdit);  // 编辑某话题
router.post('/topic/:tid/lock', auth.adminRequired, topic.lock); // 锁定主题，不能再回复

router.post('/topic/:tid/delete', auth.userRequired, topic.delete);

// 保存新建的文章
router.post('/topic/create', auth.userRequired, limit.peruserperday('create_topic', config.create_post_per_day, {showJson: false}), topic.put);

router.post('/topic/:tid/edit', auth.userRequired, topic.update);
router.post('/topic/collect', auth.userRequired, topic.collect); // 关注某话题
router.post('/topic/de_collect', auth.userRequired, topic.de_collect); // 取消关注某话题

 */
/**  */
router.post('/create', wrap(async (req, res) => {
    //content_is_html
    const { title, content } = req.body;
    // todo validate
    const userId = req.session.userId || '6682589ba6f37ab71668942b';
    await topicProxy.newAndSaveTopic(userId, title, content)
    res.status(200).send('success')
}))


router.post('/update', wrap(async (req, res) => {
    const { id, author_id, title, content } = req.body;
    const topic = await topicProxy.getTopicById(id);
    if (!topic) {
        return res.status(500).send('此话题不存在或已被删除。');
    }
    // 权限 本人或者admin todo 
    // 验证 todo
    topic.title = title;
    topic.content = content;
    topic.update_at = new Date();
    await topic.save();
    res.status(200).send('success')
}))

router.post('/delete/:id', wrap(async (req, res) => {
    const id = req.params.id;
    try {
        const topic = await topicProxy.getTopicById(id);
        if (!topic) {
            return res.status(500).send('此话题不存在或已被删除。');
        }
    } catch (error) {
        console.log(error)
    }

    // 权限 本人或者admin todo
    // 相关 todo
    topic.deleted = true;
    await topic.save();
    res.status(200).send('success')
}))

// 分页查询
router.post('/list', wrap(async (req, res) => {
    let { ...query } = req.body;
    //
    const result = await topicProxy.getTopicListByQuery(query)
    res.json(result)
}))

router.get('/detail', wrap(async (req, res) => {
    const id = req.query.id;
    const topic = await topicProxy.getTopicById(id)
    res.status(200).json(topic)
}))

module.exports = router;