/**
 * Calculadora de sumas y restas.
 * Se pretende hacer una calculadora para suma y resta que permite operaciones
 * encadenadas, esto es, una suma/resta adicional se hace sobre el resultado
 * de la anterior.
 * Se admiten números decimales.
 * 
 * Funciona tanto con los botones de pantalla como con el teclado.
 */

// Contenedores para los datos
let op1Str = ''; // sumando 1
let op2Str = ''; // sumando 2
let operator = ''; // operación
let validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'] // valores admitidos en los operandos
let operators = ['+', '-', '=', 'C'] // operadores admitidos


/**
 * Añade un nuevo caracter al flujo de la operación
 * @param {string} input entrada
 */
function handleInput(input) {
    if (validValues.includes(input)) {
        // Si es un valor numérico (o '.') gestiona añadirlo a los operandos
        addNumber(input);
    }
    else if (operators.includes(input)) {
        // Si es un operador, gestiona el operador
        handleOperation(input)
    }
    writeDisplay();
}

/**
 * Añade un nuevo número al operador que corresponda según el estado actual del cálculo
 * @param {string} number 
 * @returns 
 */
function addNumber(number) {
    // Si el operando 1 tiene valor y el operador ya está definido, afecta al operando 2
    if (op1Str !== '' && operator !== '') {
        if (number === '.' && op2Str.includes('.')) // Si es punto y ya tiene, no actúa
            return;
        op2Str += number;
    }
    else {
        if (number === '.' && op1Str.includes('.'))
            return;
        op1Str += number;
    }
}

/**
 * Gestiona una entrada de caracter de operación
 * @param {string} operation 
 */
function handleOperation(operation) {
    if (operation == 'C') {
        // C borra todo
        initialize();
    }
    else if (operation == '=') {
        // = ejecuta el cálculo
        calculate();

    }
    else if (op2Str !== "") {
        // Si ya está la operación lista, un nuevo operador equivale a un = y luego se aplica el operador
        calculate();
        operator = operation;
    }
    // Cuando el primer numero no está definido, admite que sea un número positivo o negativo.
    else if (op1Str === "" && operator === "") {
        op1Str = operation;
    }
    else {
        operator = operation;
    }
}

/**
 * Escribe el resultado en el display
 */
function writeDisplay() {
    const display = document.getElementById("display");
    if (op1Str === "") // Estado vacío
        display.innerHTML = "0";
    else // Otro caso
        display.innerHTML = op1Str + operator + op2Str;
}


/**
 * Ejecuta el cálculo de la operación
 */
function calculate() {
    const op1 = parseFloat(op1Str);
    const op2 = parseFloat(op2Str);
    // Sólo si ambos son finitos, calcula
    if (isFinite(op1) && isFinite(op2)) {
        let result;
        if (operator == '+')
            result = op1 + op2;
        else if (operator == '-')
            result = op1 - op2;
        initialize(); // Borra todo, antes de cargar en el operando 1 el resultado con máximo 4 decimales
        op1Str = +result.toFixed(4);
    }

}

/**
 * Inicializa la memoria de la calculadora
 */
function initialize() {
    op1Str = '';
    op2Str = '';
    operator = '';
}

/**
 * Interpreta si la tecla pulsada es válida para introducir en la calculadora
 * @param {string} key 
 */
function interceptKey(key) {
    const isNumber = validValues.includes(key);
    const isOperand = operators.includes(key);
    if (isNumber || isOperand){
        handleInput(key);
    }
    else if (['Backspace', 'Delete'].includes(key)){
        // Se acepta borrar como C
        handleInput('C');
    }
    else if(key === 'Enter'){
        // Se acepta enter como =
        handleInput('=');
    }
    
}

// Escuchar evento de keyup en document para interceptar cualquier tecla
document.addEventListener('keyup', (event) => interceptKey(event.key));