
const dgram = require("dgram");
const server = dgram.createSocket("udp4", function(msg, rinfo) {
  console.log("Server: Recibidos " + rinfo.size + " bytes");
  console.log("Server: desde " + rinfo.address + ":" + rinfo.port);
  console.log("Server: El mensaje es:  " + msg.toString());
});

server.bind(8000, function() {
  console.log("Vinculado a:", server.address());
});


const client = dgram.createSocket("udp4");
const message = new Buffer.from("Hola UDP");

client.send(message, 0, message.length, 8000, "127.0.0.1", function(error, bytes) {
  if (error) {
    console.error("Cliente: Un error ha ocurrido en el envío");
  } else {
    console.log("Cliente: Se han enviado correctamente " + bytes + " bytes");
  }

  client.close();
});