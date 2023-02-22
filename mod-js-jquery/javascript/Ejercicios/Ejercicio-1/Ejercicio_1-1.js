
function requireOperator(indexOperator = 1) {
    const text = `Introduce el sumando ${indexOperator}:`
    let value = prompt(text);
    value = parseInt(value);
    return value;
}

function writeResult(value) {
    const divResult = document.getElementById("divResult");
    divResult.style.display = 'block';
    const span = document.getElementById("spanResult");
    span.innerHTML = value;
}

function question() {
    const operator1 = requireOperator(1);
    const operator2 = requireOperator(2);
    const result = operator1 + operator2;
    writeResult(result);
}

window.onload = () => {
    setTimeout(() => question(), 500);

}
