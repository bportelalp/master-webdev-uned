/**
 * REST COUNTRIES https://restcountries.com/ es una RESTFull API para obtener información sobre países.
 * 
 * El endpoint permite obtener los paises de europa, incluyendo sólo los campos name y translations, que
 * representa el nombre del país y los nombres traducidos a diferentes idiomas. Hay muchos otros campos
 * que se pueden obtener consultando la documentación.
 */
const URL_COUNTRIES_EUROPE = 'https://restcountries.com/v3.1/region/europe?fields=name,translations';
const URL_COUNTRY = (name) => 'https://restcountries.com/v3.1/name/' + name;
const SELECTOR_ID = 'country-selector';
const ZIPCODE_ID = 'zip-code';
const ZIPCODE_HELP = 'zip-code-digits';

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
                .map(obj => ({ name: obj.name.common, translation: obj.translations.spa.common }))
                .sort((a, b) => a.translation > b.translation);
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

    const selector = document.getElementById(SELECTOR_ID);
    selector.innerHTML = ''; // Quita los que ya existen
    for (const country of countries) {
        const opt = document.createElement('option');
        opt.innerHTML = country.translation;
        opt.value = country.name;
        // Preestablece como seleccionado el de españa, si existe.
        if (country.name == 'Spain') {
            opt.setAttribute('selected', true);
            setZipCodePattern('Spain');
        }
        selector.appendChild(opt);

    }
}

/**
 * Busca el patrón del código postal en REST Countries y se lo aplica al input correspondiente.
 * Si no se encontrara, se establece el campo como no requerido.
 * @param {string} name Nombre del país.
 */
function setZipCodePattern(name) {
    fetch(URL_COUNTRY(name))
        .then(resp => resp.json())
        .then(country => {
            const zipInput = document.getElementById(ZIPCODE_ID);
            const zipHelp = document.getElementById(ZIPCODE_HELP)
            if (country[0].postalCode === undefined) {
                zipHelp.innerHTML = 'Debe estar vacío';
                zipInput.pattern = "^$"; // Patrón vacío
                zipInput.removeAttribute('required');
            }
            else {
                const zipPattern = country[0].postalCode.regex;
                zipHelp.innerHTML = `${country[0].postalCode.format.length} cifras`;
                zipInput.pattern = zipPattern;
                zipInput.setAttribute('required', true);
            }

        })
        .catch(err => console.error('No se consiguió el codigo postal: ', err));
}

window.onload = () => {
    fetchCountries()
        .then(countries => fillSelector(countries))
        .catch(err => {
            console.error('No se consigieron los paises. Se escriben unos por defecto. Error original:', err);
            let countries = ['Inglaterra', 'España', 'Irlanda', 'Francia']
                .map(str => ({ name: str, translation: str }));
            fillSelector(countries);
        })
    const selector = document.getElementById(SELECTOR_ID);
    selector.addEventListener('change', (event) => {
        setZipCodePattern(selector.value);
    })
};