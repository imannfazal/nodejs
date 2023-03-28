const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id)=>{
    console.log(`data received username ${name} with id: ${id}`);
})

customEmitter.emit('response','iman',55);