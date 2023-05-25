// JavaScript Document

/**
 * Función principal que obtiene y rellena el formulario con el DNI con letra
 */
function obtenerLetra() {
	const dniNoLetter = readForm();
	if (dniNoLetter !== undefined) {
		const letter = calculateLetter(parseInt(dniNoLetter));
		const dni = dniNoLetter + letter;
		writeResult(dni);
	}

}

/**
 * Obtiene el valor del formulario
 * @returns El dni numérico sin letra o undefined en caso contrario
 */
function readForm() {
	const input = document.getElementsByTagName('input')[0];
	let dniNoLetter = input.value;
	if (isNaN(parseInt(dniNoLetter)) || dniNoLetter.length != 8) {
		alert('No has introducido el número con formato correcto');
		dniNoLetter = undefined;
	}
	return dniNoLetter;
}

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
 * Escribe el resultado en el formulario
 * @param {string} dni 
 */
function writeResult(dni) {
	const input = document.getElementsByTagName('input')[0];
	input.value = dni;
}