
/**
 * Handler del evento raton encima
 * @param {HTMLImageElement} htmlElement Imagen implicada
 */
function mouseOverHandler(htmlElement){
    htmlElement.src = "img/Donald_2.png";
}

/**
 * Handler del evento raton fuera
 * @param {HTMLImageElement} htmlElement Imagen implicada
 */
function mouseLeaveHandler(htmlElement){
    htmlElement.src = "img/Donald_1.png";
}

/**
 * Handler del evento click
 * @param {HTMLImageElement} htmlElement Imagen implicada
 */
function mouseClickHandler(htmlElement){
    htmlElement.src = "img/Goofi_1.png";
}

/**
 * Handler del evento doble click
 * @param {HTMLImageElement} htmlElement Imagen implicada
 */
function mouseDoubleClickHandler(htmlElement){
    htmlElement.src = "img/Goofi_2.png";
}

/**
 * Registra los eventos del documento
 */
function registerEvents(){
    const image = document.getElementById("image");

    image.addEventListener("mouseover", () => mouseOverHandler(image));
    image.addEventListener("mouseleave", () => mouseLeaveHandler(image));
    image.addEventListener("click", () => mouseClickHandler(image));
    image.addEventListener("dblclick", () => mouseDoubleClickHandler(image));
}

/**
 * Establece la funcion registerEvents como delegado de onload
 * @returns 
 */
window.onload = registerEvents;



