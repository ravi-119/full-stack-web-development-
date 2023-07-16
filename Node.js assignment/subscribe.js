let events = require('events');

// create an event emitter

let eventemitter = new events.EventEmitter();

// create a custom event named "subscribe"

let eventNmae = "subscribe";

let subscribeEventHandler = (data)=>{
    console.log('user has subscribed', data);
};

// register the event handler
eventemitter.on(eventNmae, subscribeEventHandler);

// simulate trringinng the "subscribe" event with additional data 

eventemitter.emit(eventNmae, "pw skills");