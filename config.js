/**
 * config
 */

var path = require('path');

var config = {
    // debug 为 true 时，用于本地调试
    debug: true,
    log_dir: path.join(__dirname, 'logs'),
}

module.exports = config;