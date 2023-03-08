const msgError = 'El dato introducido es incorrecto. Introduce de nuevo cuántos años tienes.';
const msgInitial = 'Introduce la edad';
const ageLess14 = 'Tienes {0} años, eres muy jovencito';
const ageBetween14and17 = 'Tienes {0} años, probablemente seas un adolescente insoportable';
const ageBetween18and64 = 'Tienes {0} años, eres mayor de edad';
const ageMoreThan65 = 'Disfruta de tu jubilación';

function getAge() {
    let result = undefined;
    let msg = msgInitial;
    while (result === undefined) {
        const input = prompt(msg);
        const value = parseInt(input);
        if (isNaN(value) || value > 100 || value < 0) {
            msg = msgError;
        }
        else {
            result = value;
        }
    }
    return result;
}

function generateMessage(age = 0) {
    let text;
    if (age < 14)
        text = ageLess14;
    else if (age <= 17)
        text = ageBetween14and17;
    else if (age <= 64)
        text = ageBetween18and64;
    else
        text = ageMoreThan65;
    text = text.replace('{0}', age);
    return text;
}

const age = getAge();
const texto_comentario = generateMessage(age);
document.getElementById("comentario").innerHTML = texto_comentario;