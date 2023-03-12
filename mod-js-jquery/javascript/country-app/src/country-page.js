import { getCountryByName } from "./services/country-api.js";
import { renderCountryDetail } from "./services/country-rendering.js";

function parseCountryName() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    let value = params.country;
    return value;
}


window.onload = async () => {
    const countryName = parseCountryName();
    const country = await getCountryByName(countryName);
    renderCountryDetail(country[0]);
}