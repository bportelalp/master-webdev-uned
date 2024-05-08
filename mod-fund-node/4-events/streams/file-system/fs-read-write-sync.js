
const fs = require("fs");

const path = require("path");       // trabajar con rutas

const rutaFichero = path.join(process.cwd(), "hola.txt"); // forma una ruta con sus parámetros
const rutaDestino = path.join(process.cwd(), "hola-sync.txt");

const contenidos = fs.readFileSync(rutaFichero, "utf8"); // método síncrono para lectura de archivos.

console.log("Contenido del archivo:", contenidos);

const contenidosMayusculas = contenidos.toUpperCase();

fs.writeFileSync(rutaDestino, contenidosMayusculas); // método síncrono para escritura de un archivo (sobreescribe)

console.log("Archivo modificado con éxito.");