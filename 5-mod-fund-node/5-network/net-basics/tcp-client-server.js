
const net = require("net");
const server = net.createServer(function (socket) {
  socket.end("¡Hola y adiós!\n");
});


server.listen(8000);

const client = net.connect(8000, "localhost", function () {
  console.log("Conexión local " + client.localAddress + ":" + client.localPort, "está conectado a", client.remoteAddress + ":" + client.remotePort);
});
client.setEncoding("utf8");

client.on("data", function (data) {
  console.log("Cliente recibe mensaje del server: ");
  process.stdout.write(data)
});

// Cuando solo queda el server en la pila de eventos termina la aplicación
server.unref();