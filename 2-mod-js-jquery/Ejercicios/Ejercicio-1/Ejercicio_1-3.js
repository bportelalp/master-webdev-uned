function changeLetters(){
    const text = prompt('Introduce un texto con mayúsculas y minúsculas');
    const textUpper = text.toUpperCase();
    const textLower = text.toLowerCase();
    const spanUpper = document.getElementById('upper-text');
    const spanLower = document.getElementById('lower-text');
    spanUpper.innerHTML = textUpper;
    spanLower.innerHTML = textLower;
}
window.onload = () => {
    setTimeout(() => changeLetters(), 500);
}