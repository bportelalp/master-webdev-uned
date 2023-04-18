// JavaScript Document
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

/**
 * Escribe el texto en el elemento "cuadro_texto"
 * @param {string} texto 
 */
function escribe(texto) {
	document.getElementById("cuadro_texto").innerHTML = texto;
}

/**
 * Escribe la fecha actual en el documento HTML
 */
function ponfecha() {
	/**
	 * A diferencia de la struct DateTime de C#, en JS es mas limitado el formateo y no tiene una compatibilidad
	 * como con System.Globalization para construir una fecha completa. En esta función se hace sin usar librerías de npm
	 */
	const now = new Date();
	const dayOfWeek = now.getDay();
	const day = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();
	const dateFormatted = `${days[dayOfWeek]}, ${day} de ${months[month]} de ${year}`;
	escribe('Hoy es <b>' + dateFormatted + '</b>');
}