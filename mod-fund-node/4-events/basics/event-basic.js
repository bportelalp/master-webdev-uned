
const events = require('events'),
  emitter = new events.EventEmitter();

  // Función que invoca el evento.
function doATask(status) {
  if (status === 'success') {
    emitter.emit('taskSuccess'); // Evento
  } else if (status === 'fail') {
    emitter.emit('taskFail');
  }
}
// Delegado para cuando el evento es taskSuccess.
emitter.on('taskSuccess', function () {
  console.log('task success!');
});

// Delegado para cuando el evento es taskFail.
emitter.on('taskFail', function () {
  console.log('task fail');
});

setTimeout(doATask, 500, 'success');

setTimeout(doATask, 1000, 'fail');