const URL_COUNTRIES_EUROPE = 'https://restcountries.com/v3.1/region/europe?fields=name,translations';

function fetchCountries() {
    fetch(URL_COUNTRIES_EUROPE, { method: 'GET', mode: 'cors' })
        .then(response => {
            if (response.ok)
                return response.json();
            else
                return null;
        })
        .catch(r => null)
        .then(response => {
            let countries;
            if (response === null)
                countries = ['Inglaterra', 'España', 'Irlanda', 'Francia'];
            else
                countries = response
                    .map(obj => obj.translations.spa.common)
                    .sort((a, b) => a > b);
            fillSelector(countries);
        })
}
function fillSelector(countries) {
    const selector = document.getElementById('country-selector');
    selector.innerHTML = '';
    for (const country of countries) {
        const opt = document.createElement('option');
        opt.innerHTML = country;
        if (country == 'España')
            opt.setAttribute('selected', true);
        selector.appendChild(opt);
    }
}

window.onload = fetchCountries();