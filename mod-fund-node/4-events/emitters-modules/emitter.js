const events = require('events');
const emitter = new events.EventEmitter();
// El evento se recibe en otro módulo distinto del evento
const myModule = require('./module-emitter.js')(emitter);

// Tambien se recibe en este módulo
emitter.on('custom', function () {
  console.log('Evento custom: Evento recibido');
});


function doATask(status) {
  emitter.emit('custom', 'completado', status); // Varios estados
}

setTimeout(doATask, 500, 'ok');

setTimeout(doATask, 1000, 'fallo');