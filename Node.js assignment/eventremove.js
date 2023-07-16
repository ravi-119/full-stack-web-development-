let events = require('events');

// create an event emitter

let eventemitter = new events.EventEmitter();

// create a custom event named 'myEvent'

let eventname = 'myevent';

// Event handler

let myeventhandler = () =>{
    console.log('Event handler called!');
};

// register the eventhandler 
eventemitter.on(eventname, myeventhandler);

// emit the event 
eventemitter.emit(eventname);


// remove the event handler 
eventemitter.removeListener(eventname, myeventhandler);

// emit the event again 
eventemitter.emit(eventname);