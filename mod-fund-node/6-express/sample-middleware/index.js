const logger = require('./middlewares/logger-middleware');
const loggerMorgan = require('morgan');
const staticFiles = require('./middlewares/static-files-middleware');
const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

// Middleware para trazar todas las rutas
app.use(logger.logRequest);
// Middleware morgan de trazado
app.use(loggerMorgan('short'));
// Un middleware de servido de archivos estáticos propio
app.use(staticFiles(__dirname));
// El middleware de servido de archivos estáticos propio de express
app.use(express.static(path.join(__dirname, 'static-express')));
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('¡Hola Mundo!');
});

// Middleware para las solicitudes que no encajan con ninguna otra ruta.
app.use(function(req, res){           
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(app.get('port'), function(){
  console.log( 'Servidor escuchando en http://localhost:' +
    app.get('port') + '; presiona Ctrl-C para terminar.' );
});
