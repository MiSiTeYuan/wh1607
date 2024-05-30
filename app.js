/***  
 * 
*/
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const logger = require('./common/logger')
/**
 * 
 */
const { requestLog } = require('./middlewares/request_log')

/**
 * 
 */
const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

app.use(requestLog)
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
    res.status(500).send('500')
})

app.listen(3000, '127.0.0.1', () => {
    console.log(`app start`)
})