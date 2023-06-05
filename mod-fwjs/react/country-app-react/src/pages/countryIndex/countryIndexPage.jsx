import React, { useEffect, useState } from "react";
import * as api from '../../services/contryApi'
import FilterRegion from "components/filterRegion";
import CountrySmallCard from "./countrySmallCard";
import './countryIndexPage.css'

const CountryIndexPage = () => {
    const [countries, setCountries] = useState([]);
    const [countryFilter, setCountryFilter] = useState('all')

    useEffect(() => {
        console.log('Se llama efecto', countryFilter)
        if (countryFilter === 'all') {
            api.getAllCountries()
                .then(resp => setCountries(resp))
                .catch(err => console.log(err))

        }
        else {
            api.getRegionCountries(countryFilter)
                .then(resp => setCountries(resp))
                .catch(err => console.log(err))
        }
    }, [countryFilter])

    return (
        <>
            <h1>Lista de países</h1>
            <div>
                <FilterRegion onRegionChange={(filter) => { setCountryFilter(filter) }}></FilterRegion>
            </div>
            <div className="d-flex">
                {countries.map((c, idx) => {
                    return (<CountrySmallCard key={c.name.common} country={c} />)
                })}
            </div>

        </>
    );
}

export default CountryIndexPage;