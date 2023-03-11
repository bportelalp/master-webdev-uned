const ENDPOINT = 'https://restcountries.com/v3.1'
const fetchMethod = { method: 'GET', mode: 'cors' }

function buildEndpoint(search = {}, fields = []) {
    let endpoint = `${ENDPOINT}/${search.type}/${search.name}`;
    if (fields.length > 0) {
        endpoint = `${endpoint}?fields=${fields.toString()}`;
    }
    return endpoint;
}

async function getRegionCountries(regionName = '') {
    const search = {
        type: 'region',
        name: regionName
    }
    const endpoint = buildEndpoint(search);

    return fetch(endpoint, fetchMethod)
        .then(response => response.json());
}

async function getAllCountries(){
    const endpoint = ENDPOINT + '/' + 'all';
    
    return fetch(endpoint, fetchMethod)
        .then(response => response.json());
}

export {
    getAllCountries,
    getRegionCountries
}