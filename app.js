const {createReadStream} = require('fs');

const stream = createReadStream('./content/first.txt',{encoding: 'utf8'});

stream.on('data', (result)=>{
    console.log(result);
})