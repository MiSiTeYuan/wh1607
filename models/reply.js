const mongoose = require('mongoose')
const baseModel = require('./base')
const ObjectId = mongoose.Schema.ObjectId

const Reply = new mongoose.Schema({
    topic_id: ObjectId,
    author_id: ObjectId,
    reply_id: { type: ObjectId }, // 父子关系
    content: String,
    content_is_html: false,

    create_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type: Date,
        default: Date.now,
    },

    deleted: false
}, {
    toObject: {
        getters: true,
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            return ret
        }
    }
})

Reply.plugin(baseModel)

module.exports = mongoose.model('Reply', Reply)