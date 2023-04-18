// JavaScript Document


// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto) {

	document.getElementById("cuadro_texto").innerHTML = texto;

}

function ponfecha() {
	/**A diferencia de la struct DateTime de C#, en JS es mas limitado el formateo y no tiene una compatibilidad
	 * como con System.Globalization para construir una fecha completa. En esta función se hace sin usar librerías de npm
	 */
	const now = new Date();
	escribe(now.tosDateString());
}