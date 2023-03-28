
/**
 * Calcula el factorial de un número
 * @param {string} number valor para el cálculo, como string
 * @returns el factorial de number
 */
function factorial(number) {
    number = parseInt(number);
    if (isNaN(number)) {
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
 * @param {string} celsius Entrada de texto como grados ºC
 * @returns el valor en fahrenheit de la temperatura
 */
function convertir(celsius) {
    celsius = celsius.replace(",","."); // Cambia comas por puntos si es un decimal
    celsius = parseFloat(celsius);
    if (isNaN(celsius)) {
        alert("El valor no es un entero o decimal!");
        return null;
    }
    if (celsius === null)
        return null;

    const fahrenheit = (celsius * 9 / 5.0) + 32;
    return fahrenheit;
}
