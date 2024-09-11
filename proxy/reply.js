const Reply = require('../models/reply')
const User = require('./user')

exports.create = (topic_id, author_id, reply_id, content) => {
    const reply = new Reply({
        topic_id,
        author_id,
        reply_id: reply_id || null,
        content,
        content_is_html: false
    })
    return reply.save()
}

/** */
exports.getReplyById = async (replyId) => {
    const reply = await Reply.findOne({ _id: replyId })
    if (!reply) {
        throw new Error('记录不存在')
    }
    const author = await User.getUserById(reply.author_id)
    if (!author) {
        throw new Error('用户不存在')
    }
    const data = reply.toObject()
    data.author = author;
    return data;
}

// Simple list
exports.getReplySimpleList = () => {
    return Reply.find()
}

exports.getRepliesByTopicId = (topicId) => {
    let resolve, reject;
    const promise = new Promise((x, y) => (resolve = x, reject = y))

    Reply.find({ topic_id: topicId }).then(replies => {
        if (!(replies && replies.length)) {
            return resolve([])
        }
        replies.forEach(async (item, index) => {
            try {
                replies[index] = item.toObject();
                replies[index].author = await User.getUserById(item.author_id)
            } catch (error) {
            }
            if (index == replies.length - 1) {
                resolve(replies)
            }
        })
    })
    return promise;
}

//  
exports.getRepliesByAuthorId = (authorId) => {
    return Reply.find({ author_id: authorId })
}

//
exports.getCountByAuthorId = (authorId) => {
    return Reply.countDocuments({ author_id: authorId })
}