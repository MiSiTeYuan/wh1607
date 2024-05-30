/***
 * 
 */
const logger = require('../common/logger')

const ignore = /^\/(public|agent)/
exports.requestLog = (req, res, next) => {
    /*** */
    if (req.url == '/' || ignore.test(req.url)) {
        next();
        return;
    }

    logger.info(`Started`, req.url, req.ip)

    var now = new Date();
    res.on('finish', () => {
        const duration = (new Date()) - now;
        logger.info(`Completed`, res.statusCode, `${duration}ms`)
    })
    next();
}