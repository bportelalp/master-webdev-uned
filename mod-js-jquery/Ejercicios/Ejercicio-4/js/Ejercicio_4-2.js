// JavaScript Document


// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto) {

	document.getElementById("cuadro_texto").innerHTML = '<h2>' + texto + '</h2>';

}

/**
 * Escribe la hora en el DOM
 */
function ponhora() {

	// Aqui se tiene que poner el código que haga lo que pide el enunciado.
	const now = new Date();
	const hour = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const hourFormatted = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
	escribe(hourFormatted);
}

/**
 * Repite a intervalos de 500ms
 */
setInterval(() => ponhora(), 500);
