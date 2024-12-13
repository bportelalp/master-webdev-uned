
const express = require('express');
const app = express();                      // (1)

app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){            // (2)(3)(4)
    res.type('text/plain');
    res.send('¡Hola Mundo!');
});

app.listen(app.get('port'), function(){
  console.log( 'Servidor escuchando en http://localhost:' +
    app.get('port') + '; presiona Ctrl-C para terminar.' );
});
