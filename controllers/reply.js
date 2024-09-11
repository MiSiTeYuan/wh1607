const replyProxy = require('../proxy/reply')

exports.create = async (req, res) => {
    let { topicId, authorId, replyId, content } = req.body;
    // todo validate 
    await replyProxy.create(topicId, authorId, replyId, content)
    res.json({ success: true })
}

exports.update = async (req, res) => {
    let { replyId, content } = req.body;
    const reply = await replyProxy.getReplyById(replyId);
    if (!reply) {
        return res.json({ success: false, message: '评论不存在' })
    }
    reply.content = content;
    await reply.save()
    res.json({ success: true })
}


exports.delete = async (req, res) => {
    const replyId = req.params.id;
    const reply = await replyProxy.getReplyById(replyId);
    if (!reply) {
        return res.json({ success: false, message: '评论不存在' })
    }
    reply.deleted = true;
    await reply.save();
    res.json({ success: true })
}

