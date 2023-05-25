
function requireOperator(indexOperator = 1) {
    const text = `Introduce el sumando ${indexOperator}:`
    let value = prompt(text);
    value = parseFloat(value.replace(',','.'));
    return value;
}

function writeResult(value) {
    const span = document.getElementById("spanResult");
    if (value !== undefined)
        span.innerHTML = parseFloat(value.toFixed(2));
    else
        span.innerHTML = 'No se introdujeron números válidos'
}

function question() {
    const operator1 = requireOperator(1);
    const operator2 = requireOperator(2);
    let result = undefined;
    if (isFinite(operator1) && isFinite(operator2))
        result = operator1 + operator2;

    writeResult(result);
}

window.onload = () => {
    setTimeout(() => question(), 500);
}
