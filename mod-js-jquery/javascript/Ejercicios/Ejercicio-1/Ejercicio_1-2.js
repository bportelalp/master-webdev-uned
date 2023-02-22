function requestNumber() {
    let value;
    do {
        const result = prompt('Introduce los números de DNI');
        if (result.length != 8) {
            alert('El DNI debe tener 8 dígitos')
        }
        else if (isNaN(parseInt(result))) {
            alert('El valor no es un número')
        }
        else {
            value = parseInt(result);
        }
    } while (value == undefined)
    return value;
}


function calculateLetter(dniNumber) {
    const restDivision = dniNumber % 23;
    const letter = 'TRWAGMYFPDXBNJZSQVHLCKET'.charAt(restDivision);
    return letter;
}

function composeDni(number, letter) {
    return number.toString() + letter;
}

function printResults(dni) {
    const spanNumber = document.getElementById('dni');
    spanNumber.innerHTML = dni;
}

function calculateDni() {
    const value = requestNumber();
    const letter = calculateLetter(value);
    const dni = composeDni(value, letter);
    printResults(dni);

}

window.onload = () => {
    setTimeout(() => calculateDni(), 500);
}