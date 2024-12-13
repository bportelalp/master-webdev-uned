const fs = require("fs");

// Creamos el stream de lectura
const rs = fs.createReadStream("./file-stream-read.txt");

// Registra un controlador de eventos de datos, que se ejecuta cada vez que se ha leído un fragmento de datos.
rs.on("data", (data) => {

  console.log("Read chunk:", data, data.toString());

});

// Agrega un controlador de eventos de finalización, que se activará cuando no queden más datos para consumir de la transmisión.
rs.on("end", () => {

  console.log("No more data.");

});
