const btnCalc = document.getElementById('calc');
const btnReset = document.getElementById('reset');
const heightElm = document.getElementById('height');
const weightElm = document.getElementById('weight');
const resultElm = document.getElementById('result');

btnCalc.addEventListener('click', () => {
    const height = parseFloat(heightElm.value);
    const weight = parseFloat(weightElm.value);

    const bmi = weight / (height * height);

    if (isNaN(bmi)) {
        alert('Not a number after check inputs');
        resultElm
        return;
    }

    const result = document.createElement('ion-card');
    result.innerHTML =
    `
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;
    resultElm.innerHTML = '';
    resultElm.appendChild(result);
});

btnReset.addEventListener('click', () => {
    heightElm.value = '';
    weightElm.value = '';
    resultElm.innerHTML = '';
})
