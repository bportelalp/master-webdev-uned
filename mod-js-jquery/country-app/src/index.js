import { getAllCountries } from "./services/country-api.js";
import { renderCountryList } from "./services/country-rendering.js";
let allCountries = [];

async function load() {
    allCountries = await getAllCountries();
}

function applyFilter() {
    let countries = allCountries;
    const selector = document.getElementById('select-region');

    if (selector.value !== 'all') {
        countries = countries.filter(c => c.region === selector.value);
    }
    renderCountryList(countries);
}


window.onload = async () => {
    document.getElementById('select-region').value = 'all';
    await load();
    applyFilter();
};

document.getElementById('btn-filter').addEventListener('click', applyFilter);