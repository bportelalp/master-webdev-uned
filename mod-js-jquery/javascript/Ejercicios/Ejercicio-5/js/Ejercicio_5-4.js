const sizeSmall = 480;
const sizeMedium = 720;
const sizeLarge = 840;

const carouselTiming = [0, 7, 12, 17, 23, 27, 31, 32];
const carouselImg = ['Imagen01_000.jpg', 'Imagen02_007.jpg', 'Imagen03_012.jpg', 'Imagen04_017.jpg', 'Imagen05_023.jpg', 'Imagen06_027.jpg', 'Imagen07_031.jpg', 'Imagen08_032.jpg']

/**
 * Todos los elementos html que se manejan por código
 */
let video;
let buttonPauseResume;
let buttonSmall;
let buttonNormal;
let buttonLarge;
let spanTime;
let carousel;


/**
 * Conmuta el estado de reproducción del vídeo
 */
function clickPauseResumeHandler() {
    if (video.paused)
        video.play();
    else
        video.pause();
}

/**
 * Cambia el tamaño de la ventana de reproducción
 * @param {int} sizePixels 
 */
function changeSizeHandler(sizePixels) {
    video.width = sizePixels;
}

/**
 * Actualiza el tiempo de reproduccion y calcula la imagen que se muestra
 */
function timeUpdatedHandler() {
    spanTime.innerHTML = video.currentTime;
    displayImage();
}

/**
 * Determina la imagen que se debe mostrar
 */
function displayImage() {
    const second = video.currentTime;
    let indexSelected = undefined;
    // Buscar el intervalo en el que cae el vídeo
    for (let idx = 0; idx <= carouselTiming.length - 1; idx++) {
        const startTime = carouselTiming[idx];
        const endTime = carouselTiming[idx + 1];
        if (second >= startTime && second < endTime) {
            indexSelected = idx;
            break;
        }
    }
    // Cuando no encuentra, es que se escapa de escala asi que es coger el último
    if (indexSelected == undefined)
        indexSelected = carouselTiming.length - 1;

    const imgName = `img/${carouselImg[indexSelected]}`;
    if (carousel.src !== imgName)
        carousel.src = imgName;
}

/**
 * Asignar eventos y objetos
 */
window.onload = () => {
    video = document.getElementById('player');
    buttonPauseResume = document.getElementById('pause-resume');
    buttonSmall = document.getElementById('size-small');
    buttonNormal = document.getElementById('size-normal');
    buttonLarge = document.getElementById('size-large');
    spanTime = document.getElementById('tiempo');
    carousel = document.getElementById('diapo');

    video.addEventListener('timeupdate', timeUpdatedHandler)
    buttonPauseResume.addEventListener('click', clickPauseResumeHandler);
    buttonSmall.addEventListener('click', () => changeSizeHandler(sizeSmall));
    buttonNormal.addEventListener('click', () => changeSizeHandler(sizeMedium));
    buttonLarge.addEventListener('click', () => changeSizeHandler(sizeLarge));

}

