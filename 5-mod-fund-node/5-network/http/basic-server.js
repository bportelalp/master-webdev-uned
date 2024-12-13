const http = require("http"); 
const servidor = http.createServer(function(solicitud, respuesta) {     // (1)
  respuesta.write("¡Hola <strong>HTTP</strong>!");                      // (3)
  respuesta.end(); 
}); 


servidor.listen(8000);                                                  // (2)
