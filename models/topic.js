const { Schema, model } = require('mongoose')
const ObjectId = Schema.ObjectId;
const BaseModel = require('./base');

const TopicSchema = new Schema({
    author_id: ObjectId,
    title: String,
    content: String,
    content_is_html: Boolean,
    tab: String,
    visit_count: Number,
    reply_count: Number,
    collect_count: Number,

    top: { type: Boolean, default: false }, // 置顶帖
    good: { type: Boolean, default: false }, // 精华帖
    lock: { type: Boolean, default: false }, // 被锁定主题

    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },

    last_reply: { type: ObjectId },
    last_reply_at: { type: Date, default: Date.now },

    deleted: { type: Boolean, default: false }
})

TopicSchema.plugin(BaseModel);

module.exports = model('Topic', TopicSchema)