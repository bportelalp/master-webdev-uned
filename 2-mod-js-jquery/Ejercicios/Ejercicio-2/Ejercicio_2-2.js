// Generar la cadena de texto con toda la lista de multiplos y almacenarla en la variable lista_numeros
function buildSerie(startValue = 1490, endValue = 1600){
    const values = [];
    for (let index = startValue; index <= endValue; index += 5) {
        values.push(index);
    }
    return values;
}

function stringifySerie(values = [], reversed = true){
    let list = '';
    let valueList = values;
    if(reversed)
        valueList = values.reverse();

    for (let value of valueList) {
        list += value;
        if(values.indexOf(value) == values.length - 1){
            list += '.';
        }
        else {
            list += ', ';
        }
    }
    return list;
}

const arrayValues = buildSerie(1490, 1600);
const lista_numeros = stringifySerie(arrayValues, true);

//Escribir la cadena de texto en el contendor <div> identificado con el ID "comentario"
document.getElementById("comentario").innerHTML = lista_numeros;