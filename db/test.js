const fs = require('fs')
const path = require('path')
const userDbPath = path.resolve(__dirname, './user.txt')


/***  */
// content = content.toString().replace(/^\s*|\s*$/g, '');
// console.log(content)

// const list = (content.split('\n')).map(item => {
//     try {
//         item = JSON.parse(item.replace(/\r|\n/, ''))
//     } catch (error) {
//         console.log(error)
//         item = null;
//     }
//     return item;
// }
// )
// console.log(list)
// /****  */
// fs.appendFileSync(userDbPath, JSON.stringify({ position: 10, letter: "10" }) + '\r', () => { })

fs.readFile(userDbPath, (err, data) => {
    if (err) {
        console.log(err)
    }
})

async function test() {
    const res = await 1;
    throw new Error(1)
}

test().catch(err => {console.log('catch', err); })