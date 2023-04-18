// JavaScript Document

/**
 * Añade una explicación + resultado en el HTML
 * @param {string} title 
 * @param {string} value 
 */
function appendResult(title, value) {
    const element = document.createElement('div');
    element.innerHTML = `${title}: <b>${value}</b>`;
    document.body.appendChild(element);
}

window.onload = function () {
    // Numero de enlaces de la pagina
    const anchors = document.getElementsByTagName('a');
    appendResult('Número de enlaces de la página', anchors.length);

    // Dirección a la que enlaza el TERCER enlace
    if (anchors.length >= 3) {
        const third = anchors[2]
        const linkPenultimate = third.getAttribute('href');
        appendResult('Dirección del tercer enlace', linkPenultimate);
    }

    // Numero de enlaces que NO enlazan a http://prueba
    const anchorsNotPrueba = Array.from(anchors).filter(a => a.attributes.href.textContent !== 'http://prueba')
    appendResult('Numero de enlaces que no apuntan a http://prueba', anchorsNotPrueba.length);

    // Número de enlaces del SEGUNDO párrafo  
    const paragraphs = document.getElementsByTagName('p');
    if (paragraphs.length >= 2) {
        const secondParagraph = paragraphs[1];
        const anchorsSecond = secondParagraph.getElementsByTagName('a');
        appendResult('Numero de enlaces del segundo párrafo', anchorsSecond.length);
    }

}