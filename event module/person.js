const EventEmitter = require('events')

class Person extends EventEmitter{
    
    // Raise an event
    log(message){
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id:33, name:"Dhamril Shah"})
    }   
}

module.exports = Person