
/**
 * ArrayBuffer representa un array de 4 bytes
 */
const buffer = new ArrayBuffer(8);  

/**
 * En la practica es mas comodo usar vistas, que ayudan a interpretar mejor los datos
 */
const view = new Uint8Array(buffer);


view[0] = 100;
view[1] = 257; // Se interpreta como 1
view[3] = 200;
console.log('Vista:', view);
console.log('Buffer original:', buffer);