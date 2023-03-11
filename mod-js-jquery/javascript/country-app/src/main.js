import { getAllCountries, getRegionCountries } from "./country-api.js";
let allCountries = [];



async function load() {
    allCountries = await getAllCountries();
}

function render(countries = [], lang = 'spa') {
    const section = document.getElementById('render-countries');
    section.innerHTML = '';
    for (const country of countries.sort((a,b) => a.translations[lang].common > b.translations[lang].common)) {
        const divCountry = createCountryContainer(country, lang);
        section.appendChild(divCountry);
    }
}

function applyFilter() {
    let countries = allCountries;
    const selector = document.getElementById('select-region');

    if (selector.value !== 'all') {
        countries = countries.filter(c => c.region === selector.value);
    }
    render(countries);
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
    figCaption.innerHTML = country.translations[lang].common;
    return figCaption;
}
window.onload = async () => {
    document.getElementById('select-region').value = 'all';
    await load();
    applyFilter();
};
document.getElementById('btn-filter').addEventListener('click', applyFilter);