
/*
Ejecutando esta funcion con argumento un texto de mas del limite, funcionará porque el archivo se lee y se comprime como stream, no se pasa por un buffer,
asi que el archivo no está nunca al completo en memoria.
*/

const { createReadStream, createWriteStream } = require('fs');
const { createGzip } = require('zlib');

const filename = process.argv[2]
createReadStream(filename)
  .pipe(createGzip())
  .pipe(createWriteStream(`${filename}.gz`))
  .on('finish', () => console.log('File successfully compressed'))
