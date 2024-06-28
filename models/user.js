const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: { type: String },
    loginname: { type: String },
    pass: { type: String },
    email: { type: String },
    avatar : { type: String },
    accessToken: {type: String},
    active: { type: Boolean, default: false },

    url: { type: String },
    profile_image_url: { type: String },
    location: { type: String },
    signature: { type: String },
    profile: { type: String },
    weibo: { type: String },
    avatar: { type: String },
    githubId: { type: String },
    githubUsername: { type: String },
    githubAccessToken: { type: String },
    is_block: { type: Boolean, default: false },

    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
})

module.exports = model('userModel', userSchema, 'user')