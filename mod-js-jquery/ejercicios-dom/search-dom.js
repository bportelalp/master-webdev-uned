function appendResult(title, value) {
    const element = document.createElement('div');
    element.innerHTML = `${title}: <b>${value}</b>`;
    document.body.appendChild(element);
}

window.onload = function () {
    // Numero de enlaces de la pagina
    const anchors = document.getElementsByTagName('a');
    appendResult('Número de enlaces de la página', anchors.length);

    // Direccion del penultimo enlace
    const penultimate = anchors[anchors.length - 1]
    const linkPenultimate = penultimate.getAttribute('href');
    appendResult('Dirección del penúltimo enlace', linkPenultimate);

    // Numero de enlaces que apuntan a http://prueba
    const anchorsPrueba = Array.from(anchors).filter(a => a.attributes.href.textContent == 'http://prueba')
    appendResult('Numero de enlaces que apuntan a http://prueba', anchorsPrueba.length);

    // Numero de enlaces del tercer párrafo
    const paragraphs = document.getElementsByTagName('p');

    const thirdParagraph = paragraphs[2];
    const anchorsThird = thirdParagraph.getElementsByTagName('a');
    appendResult('Numero de enlaces del tercer párrafo', anchorsThird.length);

}