/*
Se ha decidido hacer una pequeña modificación de este ejercicio propuesto.
En lugar de hacer una función de dos parámetros, se hace una de n parámetros
usando el operador 'rest' y su opuesto 'spread' de js. 

'rest' es para los parámetros de entrada, que engloba todos los parametros que reciba
y no definidos explícitamente de una función en un array. Sintaxis: ...arrayQueRecogeParams.

'spread' es la inversa, permite pasar a una función un numero n de parámetros que los captura
de la desestructuración de todo el array. Sintaxis: ...arrayQueSeDescompone.

De esta manera se genera un array de n parámetros que se puede usar
para calcular el máximo de todos ellos. Esto nos da una función más versátil.
*/


/**
 * Convierte un número indeterminado de entradas de texto en valores Float y calcula el máximo
 * de todos ellos.
 * @param  {...string} numeros Entradas de texto
 * @returns el máximo de los valores de entrada
 */
function calculoMax(...numbers) {
    let parsedNums = [];
    for (const number of numbers) {
        const parsedNum = parseFloat(number.replace(",","."));
        if (isFinite(parsedNum)) {
            parsedNums.push(parsedNum);
        }
        else {
            alert(`El valor ${number} no es numérico. No se puede calcular el máximo`);
            return null;
        }
    }
    const max = Math.max(...parsedNums);
    return max;
}