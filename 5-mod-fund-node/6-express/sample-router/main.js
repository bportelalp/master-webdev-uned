
const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.set('port', process.env.PORT || 3000);
// Esto redirige a cualquier consulta a /, redirecciona al contenido de indexRouter
app.use('/', indexRouter);                      

// custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log( 'Servidor escuchando en http://localhost:' +
    app.get('port') + '; presiona Ctrl-C para terminar.' );
});
