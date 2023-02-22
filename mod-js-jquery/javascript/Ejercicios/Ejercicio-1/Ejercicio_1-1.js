
function requireOperator(indexOperator = 1) {
    const text = `Introduce el sumando ${indexOperator}:`
    let value = prompt(text);
    value = parseInt(value);
    return value;
}

function writeResult(value) {
    const span = document.getElementById("spanResult");
    if (value !== undefined)
        span.innerHTML = value;
    else
        span.innerHTML = 'No se introdujeron números válidos'
}

function question() {
    const operator1 = requireOperator(1);
    const operator2 = requireOperator(2);
    let result;
    if (typeof (operator1) !== 'number' || typeof (operator2) !== 'number')
        result = operator1 + operator2;

    writeResult(result);
}

window.onload = () => {
    setTimeout(() => question(), 500);
}
