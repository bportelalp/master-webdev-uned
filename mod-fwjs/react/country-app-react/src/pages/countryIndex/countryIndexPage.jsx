import React, { useEffect, useState } from "react";
import * as api from '../../services/contryApi'
import FilterRegion from "components/filterRegion";

const CountryIndexPage = () => {
    const [countries, setCountries] = useState([]);
    const [countryFilter, setCountryFilter] = useState('all')

    useEffect(() => {
        api.getRegionCountries(countryFilter)
        .then(resp => setCountries(resp))
    }, [countryFilter])

    return (
        <>
            <h1>Lista de países</h1>
            <div>
                <FilterRegion onRegionChange={() => {}}></FilterRegion>
            </div>
            {countries.map((c,idx) => {
                return (<div key={c.name.official}>{c.name.common}</div>)
            })}
        </>
    );
}

export default CountryIndexPage;