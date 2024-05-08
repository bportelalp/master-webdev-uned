// Execute tcp-transfer-secondary.js


process.on("message", function(message, server) {
  console.log("Mensaje recibido en tcp-secondary.js");
  if (message === "server") {
    server.on("connection", function(socket) {
      console.log
      socket.end("Manejado por el proceso hijo\n\r");
    });
  }
});