var pathLib = require('path')
var config = require('../config')

var env = process.env.NODE_ENV || "development"
var log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: "file", filename: pathLib.join(config.log_dir, 'cheese.log') } }, // 输出源
    categories: { default: { appenders: ["cheese"], level: "INFO" } },
});

var logger = log4js.getLogger('cheese');
/** 
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");
*/
module.exports = logger;