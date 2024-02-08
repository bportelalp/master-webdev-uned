const http = require('http');

const host = '127.0.0.1';

const puerto = 8066;

const server = http.createServer((req, respuesta) => {
  respuesta.statusCode = 200;
  respuesta.setHeader('Content-Type', 'text/plain');
  respuesta.write('Hola Mundo!\n');
  respuesta.end();
})

server.listen(puerto, host, () => {
  console.log(`Servidor activo en http://${host}:${puerto}/`);
})