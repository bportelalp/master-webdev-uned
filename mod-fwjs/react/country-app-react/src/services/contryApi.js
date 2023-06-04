import axios from "axios";
const ENDPOINT = 'https://restcountries.com/v3.1'



function buildEndpoint(search = {}, fields = []) {
    let endpoint = `${ENDPOINT}/${search.type}/${search.name}`;
    if (fields.length > 0) {
        endpoint = `${endpoint}?fields=${fields.toString()}`;
    }
    return endpoint;
}

/**
 * Get a list of countries by its region
 * @param {string} regionName The name of the region to search
 * @returns 
 */
async function getRegionCountries(regionName = '') {
    const search = {
        type: 'region',
        name: regionName
    }
    const endpoint = buildEndpoint(search);
    return await axios.get(endpoint)
        .then(resp => resp.data);
}

/**
 * Get a list of all countries
 * @returns 
 */
async function getAllCountries() {
    const endpoint = ENDPOINT + '/all';

    return await axios.get(endpoint)
    .then(resp => resp.data);
}

/**
 * Get the detail of one country
 * @param {string} countryName The name of the country
 * @returns 
 */
async function getCountryByName(countryName = '') {
    const search = {
        type: 'name',
        name: countryName
    }
    const endpoint = buildEndpoint(search);

    return await axios.get(endpoint)
    .then(resp => resp.data);
}

export {
    getAllCountries,
    getRegionCountries,
    getCountryByName
}