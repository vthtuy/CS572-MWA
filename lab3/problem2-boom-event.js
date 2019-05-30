const  EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = 'Athlete is working out!';
    }
    visit() {
        this.emit('boom', this.message);
    }
}

var gym = new Gym();
gym.on('boom', function(data) {
    console.log(data);    
});
var interval = setInterval(function() {gym.visit(); }, 1000);

setTimeout( () =>  clearInterval(interval), 5000); 