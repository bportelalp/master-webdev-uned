
const events = require('events');
const emitter = new events.EventEmitter();

// Con once una vez que se emite la primera vez, se desvincula el evento y no se vuelve a recibir.
emitter.once('solounavez', function () {
  console.log('Solo una vez');
});

emitter.emit('solounavez');

// Este no se emite
emitter.emit('solounavez');