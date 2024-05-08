
const net = require("net");
const server = net.createServer(function(socket) {
  socket.end("¡Hola y adiós!\n");
});

server.listen(8000);

// Use telnet localhost 8000 to receive the response