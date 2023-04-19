// JavaScript Document

/**
 * Aplica la clase visible al elemento adicional y la oculta al enlace
 */
function muestra() {
	const text = document.getElementById('adicional');
	text.className = 'visible';
	const link = document.getElementById('enlace');
	link.className = 'oculto';
}