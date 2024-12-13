
const fs = require("fs");
const archivo = process.argv[2];
function printMetadata(archivo) {
    try {
      console.log('Se van a imprimir metadatos del archivo');
        const estadisticasArchivo = fs.statSync(archivo);
        console.log(estadisticasArchivo);
      } catch (err) {
        console.error("Error releyendo el archivo: ", archivo);
      }
}

printMetadata(archivo);