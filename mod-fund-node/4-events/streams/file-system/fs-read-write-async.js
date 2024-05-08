const fs = require("fs");

const path = require("path");

const rutaFichero = path.join(process.cwd(), "hola.txt");
const rutaDestino = path.join(process.cwd(), "hola-async.txt");

fs.readFile(rutaFichero, "utf8", (err, contenidos) => {

  if (err) {
    return console.log(err);
  }

  console.log("Contenido del archivo:", contenidos);

  const contenidosMayusculas = contenidos.toUpperCase();

  updateFile(rutaDestino, contenidosMayusculas);

});

function updateFile(rutaFichero, contents) {

  fs.writeFile(rutaFichero, contents, (err) => {

    if (err) throw err;

    console.log("Archivo modificado con éxito.");

  });
}