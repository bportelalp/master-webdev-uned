export {
    renderCountryList,
    renderCountryDetail
}

const elements = {
    commonName: document.getElementById('country-common-name'),
    commonNameSpan: document.getElementById('country-common-name'),
    officialName: document.getElementById('country-official-name'),
    nativeName: document.getElementById('country-native-name'),
    capital: document.getElementById('country-capital'),
    population: document.getElementById('country-population'),
    flag: document.getElementById('country-flag'),
    coatOfArms: document.getElementById('country-coatOfArms'),
    currency: document.getElementById('country-currency')
}

function renderCountryDetail(country, lang = 'spa'){
    const nameTranslated = country.translations[lang];
    elements.commonName.innerHTML = nameTranslated.common;
    elements.commonNameSpan.innerHTML = nameTranslated.common;
    elements.officialName.innerHTML = nameTranslated.official;

    const nativeName = Object.entries(country.name.nativeName)[0][1].official;
    elements.nativeName.innerHTML = nativeName;
    elements.capital.innerHTML = country.capital[0];
    
    const population = new Intl.NumberFormat('es-ES').format(country.population);
    elements.population.innerHTML = population;
    elements.flag.src = country.flags.png;
    elements.coatOfArms.src = country.coatOfArms.png;

    const currencies = country.currencies;
    let currencyText = '';
    for (const [key, value] of Object.entries(currencies)) {
        currencyText += `${value.name} (${value.symbol}) `;
    }
    elements.currency.innerHTML = currencyText;
    
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