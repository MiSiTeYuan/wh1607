const Topic = require('../models/topic')

//
exports.newAndSaveTopic = (author_id, title, content) => {
    const topic = new Topic({ author_id, title, content });
    return topic.save()
}


exports.getTopicById = (id) => {
    return Topic.findOne({ _id: id })
}


exports.getTopicListByQuery = async (filter) => {
    let { pageIndex, pageSize, ...query } = filter
    // 
    pageIndex = Math.max(parseInt(pageIndex, 10), 1);
    pageSize = parseInt(pageSize, 10);
    pageSize = pageSize > 0 ? pageSize : 10;
    //
    query.deleted = false;
    const datas = await Topic.find(query, {}, { limit: pageSize, skip: Math.max(0, pageIndex - 1) * pageSize, sort: { _id: -1 } })
    const total = await Topic.countDocuments(query)
    return { datas, total, pageIndex, pageSize };
}