
const cp = require("child_process");
const net = require("net");
const server = net.createServer();
const child = cp.fork("./tcp-secondary.js");

server.on("connection", function(socket) {
  socket.end("Manejado por el proceso padre\n\r");
});
server.listen(8000, function() {
  console.log("Enviando a subproceso");
  child.send("server", server);
});

function onReceive(data) {
  console.log("Cliente recibe mensaje del server: ");
  process.stdout.write(data)
}

const client = net.connect(8000, "localhost", function () {
  console.log("Cliente 1 conectado");
});
client.setEncoding("utf8");

client.on("data", onReceive);

