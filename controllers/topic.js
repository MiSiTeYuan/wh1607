const topicProxy = require('../proxy/topic')
const userProxy = require('../proxy/user')

exports.create = async (req, res) => {
    const { title, content } = req.body;
    // todo validate
    const userId = req.session.userId || '6682589ba6f37ab71668942b';
    await topicProxy.newAndSaveTopic(userId, title, content)
    res.json({ success: true })
}

exports.update = async (req, res) => {
    const { id, author_id, title, content } = req.body;
    const topic = await topicProxy.getTopicById(id);
    if (!topic) {
        return res.json({ success: false, message: '此话题不存在或已被删除' })
    }
    // 权限 本人或者admin todo 
    // 验证 todo
    topic.title = title;
    topic.content = content;
    topic.update_at = new Date();
    topic.author_id = author_id;
    await topic.save();
    res.json({ success: true })
}

exports.delete = async (req, res) => {
    const id = req.query.id;
    const topic = await topicProxy.getTopicById(id);
    if (!topic) {
        return res.json({ success: false, message: '此话题不存在或已被删除' })
    }
    topic.deleted = true;
    await topic.save();
    res.json({ success: true })
}

exports.detail = async (req, res) => {
    const topicId = req.query.id;
    const data = await topicProxy.getFullTopic(topicId)
    res.json(data)
}

exports.list = async (req, res) => {
    let { pageIndex, pageSize, title, author } = req.body;
    pageIndex = parseInt(pageIndex, 10) || 1;
    pageSize = parseInt(pageSize, 10) || 10;
    pageSize = Math.min(pageSize, 100)
    //
    const query = { pageIndex, pageSize };
    if (title != null) {
        query.title = new RegExp(title, 'i');
    }
    if (author != null) {
        const authorList = await userProxy.getUsersByQuery({ name: new RegExp(author) });
        if (authorList && authorList.length) {
            query.author_id = { $in: authorList.map(item => item._id) }
        }
    }
    const options = { limit: pageSize, skip: Math.max(0, pageIndex - 1) * pageSize, sort: { _id: -1 } }

    const topicList = await topicProxy.getTopicListByQuery(query, '', options)
    const recordCount = await topicProxy.getCountByQuery(query);
    const totalPage = Math.ceil(recordCount / pageSize);
    const data = {
        pageIndex,
        pageSize,
        datas: topicList,
        totalPage,
        recordCount
    }
    res.json(data)
}


