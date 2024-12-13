
const express = require('express');
const logging = require('./middlewares/log-to-file');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(logging.logToFilesystem());
  
app.use(logging.accessLogs()); 

// Endpoints
app.get('/', function(req, res){
  res.type('text/plain');
  res.send('¡Hola Mundo!');
});
app.get('/about', function(req, res){
  res.type('text/plain');
  res.send('Información del Mundo');
});


app.listen(app.get('port'), function(){
  console.log( 'Servidor escuchando en http://localhost:' +
    app.get('port') + '; presiona Ctrl-C para terminar.' );
});
