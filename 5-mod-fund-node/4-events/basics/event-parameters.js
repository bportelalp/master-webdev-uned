const events = require('events'),
  emitter = new events.EventEmitter();
 
// Lanza evento con parámetros
function doATask(status) {
  emitter.emit('taskComplete', 'completado', status); // Varios estados
}
 
// Delegado que recibe parámetros cuando el evento es taskComplete.
emitter.on('taskComplete', function(type, status) {
  console.log('la tarea se ha ', type, ' con el estado ', status);
});
 
setTimeout(doATask, 500, 'ok');
 
setTimeout(doATask, 1000, 'fallo');