
var ext = require('./process-module-emitter');

// Escucha evento del process. cuya emision e
process.on('globalEvent', function() {
	console.log('Evento global');
});

// Emite un evento, que se declara dentro de un módulo
ext.emitEvent();