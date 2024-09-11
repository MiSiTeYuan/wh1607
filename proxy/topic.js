const Topic = require('../models/topic');
const User = require('./user');
const Reply = require('./reply')

//
exports.newAndSaveTopic = (author_id, title, content) => {
    const topic = new Topic({ author_id, title, content });
    return topic.save()
}


exports.getTopicById = (id) => {
    return Topic.findOne({ _id: id })
}

exports.getCountByQuery = function (query) {
    return Topic.countDocuments(query);
};

/**
 * 
 * @param {*} query  条件
 * @param {*} options  参数 limit、skip
 */
exports.getTopicListByQuery = (query, options) => {
    if (Object.prototype.toString.call(query) !== "[object Object]") {
        query = {}
    }
    query.deleted = false;

    if (Object.prototype.toString.call(options) !== "[object Object]") {
        options = {}
    }
    let resolve, reject;
    const promise = new Promise((x, y) => (resolve = x, reject = y))

    Topic.find(query, {}, options).then(topics => {
        if (!(topics && topics.length)) {
            return resolve([])
        }
        topics.forEach((item, index) => {
            topics[index] = item.toObject();
            Promise.all([User.getUserById(item.author_id), Reply.getRepliesByTopicId(item._id)]).then(([author, replies]) => {
                topics[index].author = author;
                topics[index].replies = replies;
            }).catch().finally(() => {
                if (index === topics.length - 1) {
                    resolve(topics)
                }
            })
        })
    })

    return promise;
}

//
exports.getFullTopic = async (topicId) => {
    const topicDto = await Topic.findOne({ _id: topicId })
    if (!topicDto) {
        throw new Error('话题不存在')
    }
    const topic = topicDto.toObject();
    const author = await User.getUserById(topic.author_id);
    if (!author) {
        throw new Error('话题作者不存在')
    }
    const replies = await Reply.getRepliesByTopicId(topicId)
    topic.author = author;
    topic.replies = replies;
    return topic
}