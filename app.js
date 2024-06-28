/***  
 * 
*/
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const logger = require('./common/logger')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/admin')

mongoose.connection.on("connected", function () {
    console.log("连接成功");
})

mongoose.connection.on('error', function (err) {
    console.log(`连接异常，${err}`);
})

/**
 * 
 */
const { requestLog } = require('./middlewares/request_log')
const { auth } = require('./middlewares/auth')

/**
 * 
 */
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser('keyboard cat'));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
//
app.use(session({
    name: 'sessionId',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,   // false，未初始化的session的cookie将不会在response中设置
    maxAge: 1 * 60 * 60 * 1000, // 1 hours
    // store: new redisStore()     // (使用redis的存储session)
}));

app.use(requestLog)
app.use(auth)
/** */
app.use(require('./routes'))

app.use('/api/test', (req, res) => {
    throw new Error('err')
})

/**handle 404 */
app.use('*', (req, res) => {
    res.status(404).send('404')
});

/**handle error */
app.use((err, req, res, next) => {
    logger.error(err)
    res.status(500).send(err)
})

app.listen(3000, '127.0.0.1', () => {
    console.log(`app start`)
})