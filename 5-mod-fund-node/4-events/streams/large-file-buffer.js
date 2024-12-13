/*
 * Los buffers tienen un tamaño máximo.
 */

const buffers = require('node:buffer');
console.log('Máximo tamaño de buffer en el sistema en MB:', buffers.constants.MAX_LENGTH / (1024 * 1024));


const fs = require("fs");

// Creamos el stream de escritura
const fileName = "./file.txt"
const file = fs.createWriteStream(fileName);

// Escribimos una cadena varias veces
for (let i = 0; i <= 100000; i++) {
  file.write(
    "NodeJs es un motor de ejecución de JavaScript creado con el motor JavaScript V8 de Google Chrome.\n"
  );
}


const fsp = require("fs/promises");
const { gzip } = require('zlib');
const { promisify } = require('util')
const gzipPromise = promisify(gzip)

async function compress (fileBuffer) {
  const gzippedData = await gzipPromise(fileBuffer);
  await fsp.writeFile(`${fileName}.gz`, gzippedData);
  console.log('Ejemplo de como comprimir un archivo leido a un buffer previamente');
}

async function mainCompress(){
  const bufferFile = await fsp.readFile(fileName);
  compress(bufferFile);
}

mainCompress()

/*
Si generamos un buffer grande , ya ni nos dejará. lo mismo que crearlo
*/

// Descomentar para ver como rompe.
//const buffer = Buffer.alloc(buffers.constants.MAX_LENGTH + 1024);