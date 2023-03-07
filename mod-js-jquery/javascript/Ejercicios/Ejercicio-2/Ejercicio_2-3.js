const msgId = 'Por favor, introduzca su DNI de la forma 12345678G (8 dígitos y una letra)';
const msgIdInvalid = 'DNI inválido. Asegúrese de introducirlo de la forma 12345678G (8 dígitos y letra';
const msgIdOk = 'DNI introducido correctamente.';
const msgDate = 'Por favor, introduzca la fecha actual (DD/MM/AAAA);';
const msgDateInvalid = 'Fecha incorrecta. Asegúrese de introducirla en el formato DD/MM/AAAA';
const msgDateOk = 'Fecha introducida correctamente.';
const msgEmail = 'Por favor, introduzca su email:';
const msgEmailInvalid = 'Email inválido. Por favor, introduzca de nuevo su email (usuario@servidor.com)';
const msgEmailOk = 'Email introducido correctamente';

function getField(msg, msgInvalid, msgOk, patternRegex) {
    let result = undefined;
    let msgShow = msg;
    while (result === undefined) {
        const input = prompt(msgShow);
        const results = input.match(patternRegex);
        if (results === null) {
            msgShow = msgInvalid;
        }
        else {
            result = results[0];
        }
    }
    alert(msgOk);
    return result;
}


let id = getField(msgId, msgIdInvalid, msgIdOk, /\d{8}\D/);
/*Fecha: (0 a 29)OR(30 a 31) / (1 a 9)OR(10 a 12) / (Cualquier numero de 4 digitos) */
let date = getField(msgDate, msgDateInvalid, msgDateOk, /(([0-2][0-9])|(3[0-1]))\/((0[1-9])|(1[0-2]))\/[0-9]{4}/);
let email = getField(msgEmail, msgEmailInvalid, msgEmailOk, /\D{1,}[@]\D{1,}.\D{1,}/);

document.getElementById('id').innerHTML = id;
document.getElementById('date').innerHTML = date;
document.getElementById('email').innerHTML = email;