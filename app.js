// const sayHi = require('./modules.js');
// const name = require('./globals.js');

// 1-OS MODULE
// const os = require("os");
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.type());
// console.log(os.freemem());

// 2-PATH MODULE
// const path = require('path');
// console.log(path.sep);
// const join = path.join('/content', '/subfolder','/test.txt');
// console.log(join);
// const base=path.basename(join);
// console.log(base);
// const absolute = path.resolve(__dirname,'content', 'subfolder','test.txt');
// console.log(absolute);

// 3- FILESYSTEM-sync
// const {readFileSync, writeFileSync} = require('fs');
// const first =readFileSync('./content/first.txt','utf8');
// const second =readFileSync('./content/second.txt','utf8');

// writeFileSync(
//     './content/writeKrdiya.txt',
//     'here is the result'+' '+first+' '+second
// )


// 4-FILESYSTEM-asynch
// const { readFile, writeFile } = require('fs');
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
//     const first = result;
//     readFile('./content/first.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(result);
//         const second = result;
//         writeFile(
//             './content/writeKrdiyaPhirse.txt',
//             'here is the result' + ' ' + first + ' ' + second
//         , (err,result) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(result);
//         })
//     })
// })


// 5- HTTP MODULE
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Welcome to my home page!");
        res.end();
    }
    else if (req.url === '/about') {
        res.write("here is short history!");
        res.end();
    }
    else {
        res.end(`
        <h1>Oops</h1>
        <p>the page ure looking for doesnt exist!</p>
        <a href='/'>back home</a>
        `)
    }

})

server.listen(3000);

// OLD IMPORTS
// console.log(sayHi(name.name1));
// console.log(sayHi(name.name2));