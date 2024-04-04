
/*
La clase buffer es propia de node.js
*/
let buf = new Buffer.alloc(4);

console.log('Un buffer vacío:', buf);

buf[0] = 21;
buf[1] = 22;

console.log('Con datos:', buf);


const bufferString = Buffer.from("DatosCadena")
console.log('Tambien se puede crear con datos de cadena:', bufferString);
console.log('Se puede reinterpretar la cadena con .toString():', bufferString.toString());

