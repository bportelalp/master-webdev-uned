// JavaScript Document

/**
 * Contenedor de los datos de títulos y fuente de las fotos
 */
const data = {
    sciences: {
        title: 'Facultad de Ciencias',
        src: 'img/fotoCiencias.jpg'
    },
    law: {
        title: 'Facultad de Derecho',
        src: 'img/fotoDerecho.jpg'
    },
    economics: {
        title: 'Facultad de Económicas',
        src: 'img/fotoEconomicas.jpg'
    },
    education: {
        title: 'Facultad de Educación',
        src: 'img/fotoEducacion.jpg'
    },
    filology: {
        title: 'Facultad de Filología',
        src: 'img/fotoFilologia.jpg'
    },
    philosophy: {
        title: 'Facultad de Filosofía',
        src: 'img/fotoFilosofia.jpg'
    },
    history: {
        title: 'Facultad de Geografía e Historia',
        src: 'img/fotoGeografiaHistoria.jpg'
    },
    engineering: {
        title: 'Facultad de Industriales',
        src: 'img/fotoIndustriales130.jpg'
    },
    software: {
        title: 'Facultad de Informática',
        src: 'img/fotoInformatica.jpg'
    },
    psychology: {
        title: 'Facultad de Psicología',
        src: 'img/fotoPsicologia.jpg'
    },
}

let lastIndex = 0;
/**
 * Cambia el contenido del HTML por la siguiente facultad
 */
function changeContent() {
    const index = randomIndex();
    const sectionDisplay = Object.keys(data)[index];
    const title = data[sectionDisplay].title;
    const photo = data[sectionDisplay].src;
    document.getElementById('titulos').innerHTML = title;
    document.getElementById('facultades').src = photo;
}

/**
 * Crea un valor aleatorio entre 0 y el máximo de propiedades de data
 * @returns Un valor aleatorio distinto al anterior generado
 */
function randomIndex() {
    let rnd;
    do { // Evitar que se repita respecto a la anterior iteración
        rnd = Math.floor(Math.random() * Object.keys(data).length)
    } while (rnd === lastIndex)
    lastIndex = rnd;
    return rnd;
}

window.onload = setInterval(() => changeContent(), 2000);









