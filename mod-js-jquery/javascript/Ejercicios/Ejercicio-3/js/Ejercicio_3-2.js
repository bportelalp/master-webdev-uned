
/**
 * Calcula el factorial de un número
 * @param {string} input valor para el cálculo, como string y que será sometido a comprobaciones
 * @returns el factorial de number
 */
function factorial(input) {
    input = input.replace(',','.')
    let number = parseInt(input);
    // parseInt, si es decimal, va a quitar los decimales, pero no se debe aceptar un 
    // número decimal como entrada válida, por eso la segunda comprobación
    if (isNaN(number) || input.includes('.')) {
        alert("El valor no es un entero!");
        return null;
    }
    let factorial = 1;
    for (let idx = 1; idx <= number; idx++) {
        factorial *= idx;
    }
    return factorial;
}

/**
 * Convierte un valor de temperatura en celsius a fahrenheit
 * @param {string} celsius Entrada de texto como grados ºC. Será sometido a comprobaciones
 * @returns el valor en fahrenheit de la temperatura
 */
function convertir(celsius) {
    celsius = celsius.replace(",","."); // Cambia comas por puntos si es un decimal
    celsius = parseFloat(celsius);
    if (isNaN(celsius)) {
        alert("El valor no es un entero o decimal!");
        return null;
    }
    const fahrenheit = (celsius * 9 / 5.0) + 32;
    return fahrenheit;
}
