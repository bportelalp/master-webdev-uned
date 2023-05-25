const TEXT_TYPING = 'Teclea los 8 dígitos numéricos del DNI y se añade la letra automáticamente';
const TEXT_DNI_OK = 'DNI Completo';
const TEXT_DNI_NOK = 'No se reconoce la entrada'
const bgBlue = '#81F7D8';
const bgGray = '#dcdcdc';

let inputElement;
let textElement;

/**
 * Calcula la letra del DNI
 * @param {number} dniNumber 
 * @returns 
 */
function calculateLetter(dniNumber) {
	const restDivision = dniNumber % 23;
	const letter = 'TRWAGMYFPDXBNJZSQVHLCKET'.charAt(restDivision);
	return letter;
}

/**
 * Rellena el texto de ayuda
 * @param {string} text 
 */
function inform(text){
    textElement.innerHTML = text;
}

/**
 * Cubre la entrada con el dni y letra
 * @param {int} number 
 * @param {string} letter 
 */
function displayDni(number, letter){
    inputElement.value = number + " - " + letter;
}

/**
 * Cambia el color del fondo al indicado
 */
function changeBgColor(htmlColor){
    document.getElementById("form").style.backgroundColor = htmlColor;
}

/**
 * Handler del cambio de contenido en la entrada de texto
 */
function inputChanged(){
    const value = inputElement.value;
    if(value.length == 8){
        const dniNumber = parseInt(value);
        if(isNaN(dniNumber)){
            inform(TEXT_DNI_NOK);
            changeBgColor(bgGray)
        }
        else {
            const letter = calculateLetter(dniNumber);
            displayDni(dniNumber, letter);
            inform(TEXT_DNI_OK)
            changeBgColor(bgBlue)
        }
    }
    else if (value.length > 8){
        inform(TEXT_DNI_NOK)
        changeBgColor(bgGray)
    }
    else {
        inform(TEXT_TYPING)
        changeBgColor(bgGray)
    }
}



window.onload = () => {
    inputElement = document.getElementById('textoDNI');
    textElement = document.getElementById('capaTextoId');
    inputElement.addEventListener('keyup', inputChanged)
    textElement.innerHTML = TEXT_TYPING;
}