/**
 * Hay variables especiales en el contexto global para conocer las rutas.
 */

console.log('Este archivo es: ', __filename);
console.log('Este archivo está en: ', __dirname);

console.log('Se puede obtener el directorio actual tambien de esta manera: ', process.cwd());

try {
  console.log('\n\rCambiando a directorio raiz...');
  process.chdir("/");
} catch (exception) {
  console.error("error en chdirr:  " + exception.message);
}

console.log("El directorio actual ahora es " + process.cwd());


/**
 * El modulo path permite trabajar con rutas y el sistema de archivos.
 */
const path = require('path');
const directories = ['folderMain', 'subFolder', 'file.txt'];
const filePath = directories.join(path.sep);
console.log('Con path.sep podemos generar rutas de archivos para cualquier plataforma. Ejemplo:', filePath);
