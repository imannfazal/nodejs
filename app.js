const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((reject, resolve) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data);
            }
        })
    })
}