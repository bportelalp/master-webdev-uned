/**
 * REST COUNTRIES https://restcountries.com/ es una RESTFull API para obtener información sobre países.
 * 
 * El endpoint permite obtener los paises de europa, incluyendo sólo los campos name y translations, que
 * representa el nombre del país y los nombres traducidos a diferentes idiomas. Hay muchos otros campos
 * que se pueden obtener consultando la documentación.
 */
const URL_COUNTRIES_EUROPE = 'https://restcountries.com/v3.1/region/europe?fields=name,translations';

/**
 * Obtiene la lista de paises europeos.
 * @returns {Promise<string[]>} Promise que se resuelve con la lista de nombres de países
 */
async function fetchCountries() {
    return fetch(URL_COUNTRIES_EUROPE, { method: 'GET', mode: 'cors' })
        .then(response => {
            if (response.ok)
                return response.json();
            else
                return null;
        })
        .then(response => {
            const countries = response
                .map(obj => obj.translations.spa.common)
                .sort((a, b) => a > b);
            return countries;
        })
}

/**
 * Rellena el selector de países con la lista de nombres que se recibe
 * @param {string[]} countries Array con países
 */
function fillSelector(countries = []) {
    if (countries.count == 0)
        return;

    const selector = document.getElementById('country-selector');
    selector.innerHTML = ''; // Quita los que ya existen
    for (const country of countries) {
        const opt = document.createElement('option');
        opt.innerHTML = country;
        // Preestablece como seleccionado el de españa, si existe.
        if (country == 'España')
            opt.setAttribute('selected', true);
        selector.appendChild(opt);
    }
}

window.onload = () => {
    fetchCountries()
        .then(countries => fillSelector(countries))
        .catch(err => {
            console.error('No se consigieron los paises. Se escriben unos por defecto. Error original:', err);
            let countries = ['Inglaterra', 'España', 'Irlanda', 'Francia'];
            fillSelector(countries);
        })
};