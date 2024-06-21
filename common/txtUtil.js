const fs = require('fs')
const { mayJunPromisify } = require('./promisify')
const readFilePromisify = mayJunPromisify(fs.readFile);
const appendFilePromisify = mayJunPromisify(fs.appendFile);

/**
 * 
 * @param {*} path 
 * @returns 
 */
async function getAllLines(path) {
    //  
    try {
        await mayJunPromisify(fs.access)(path, fs.constants.F_OK);
    } catch (error) {
        fs.writeFileSync(path, '', () => { })
    }
    //
    const buffer = await readFilePromisify(path)
    let content = buffer.toString();
    let line = null;
    let index = 0;
    let ret = [];

    while (index >= 0) {
        if (content.replace(/\s*/) == '') {
            index = -1;
            break;
        }
        index = content.indexOf('\n')
        line = content.slice(0, index);
        content = content.slice(index + 1,)
        line && ret.push(JSON.parse(line))
    }
    return ret;
}

/**
 * 
 * @param {*} path 
 * @param {*} record 
 */
async function appendLine(path, record) {
    const line = JSON.stringify(record) + '\r';
    await appendFilePromisify(path, line)
}

module.exports = {
    getAllLines,
    appendLine,
}