export {
    renderCountryList,
    renderCountryDetail
}

function renderCountryDetail(country, lang = 'spa'){
    const nameTranslated = country.translations[lang];
    document.getElementById('country-common-name').innerHTML = nameTranslated.common;
    document.getElementById('country-common-name-span').innerHTML = nameTranslated.common;
    document.getElementById('country-official-name').innerHTML = nameTranslated.official;
    const nativeName = Object.entries(country.name.nativeName)[0][1].official;
    document.getElementById('country-native-name').innerHTML = nativeName;
    document.getElementById('country-capital').innerHTML = country.capital[0];
    const population = new Intl.NumberFormat('es-ES').format(country.population);
    document.getElementById('country-population').innerHTML = population;
    document.getElementById('country-flag').src = country.flags.png;
    document.getElementById('country-coatOfArms').src = country.coatOfArms.png;

    const currencies = country.currencies;
    let currencyText = '';
    for (const [key, value] of Object.entries(currencies)) {
        currencyText += `${value.name} (${value.symbol}) `;
    }
    document.getElementById('country-currency').innerHTML = currencyText;
    
}


/**
 * Render a container in html showing the country
 * @param {*} countries list of country objects
 * @param {*} lang language to render the contaiener
 */
function renderCountryList(countries = [], lang = 'spa') {
    const section = document.getElementById('render-countries');
    section.innerHTML = '';
    for (const country of countries.sort((a,b) => a.translations[lang].common > b.translations[lang].common)) {
        const divCountry = createCountryContainer(country, lang);
        section.appendChild(divCountry);
    }
}

function createCountryContainer(country, lang = 'spa'){
    const divCountry = document.createElement('div');
    divCountry.className = 'country-container';

    const img = createImgFlag(country);
    divCountry.appendChild(img);

    const figCaption = createImgCaption(country, lang);
    divCountry.appendChild(figCaption);
    return divCountry;
}

function createImgFlag(country){
    const img = document.createElement('img');
    img.src = country.flags.png;
    img.alt = country.flags.alt;
    img.className = 'country-flag';
    return img;
}

function createImgCaption(country, lang = 'spa'){
    const figCaption = document.createElement('figcaption');
    const a = document.createElement('a');
    a.href = `./country-page.html?country=${country.name.common}`;
    a.innerHTML = country.translations[lang].common;
    figCaption.appendChild(a);
    return figCaption;
}