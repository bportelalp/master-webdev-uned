
module.exports = function(emitter) {
  emitter.on('custom', function(type, status) {
    console.log('Evento original: la tarea se ha ', type, ' con el estado ', status);
  });
};