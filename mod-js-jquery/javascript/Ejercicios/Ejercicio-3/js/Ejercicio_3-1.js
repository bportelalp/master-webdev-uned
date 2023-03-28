
/**
 * Aplica en el DOM el mensaje del botón1.
 */
function mensaje1(){
    changeText(1);
}

/**
 * Aplica en el DOM el mensaje del botón1.
 */
function mensaje2() {
    changeText(2);
}


/**
 * Cambia el contenido del contenedor div con id="texto".
 * @param {number} buttonIdx El índice del botón que se muestra.
 */
function changeText(buttonIdx){
    const divText = document.getElementById("texto");
    divText.innerHTML = `<p>Ha pulsado BOTÓN ${buttonIdx}</p>`;
}