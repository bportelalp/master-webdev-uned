import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/contryApi"
import './countryDetailPage.css'


const CountryDetailPage = (props) => {
    const { commonName } = useParams();
    let [country, setCountry] = useState(undefined)
    useEffect(() => {
        api.getCountryByName(commonName)
            .then(r => {
                console.log(r[0])
                setCountry(r[0])
            }
            )
    }, [commonName])

    let name;
    let officialName;
    let nativeName;
    let capital;
    let population;
    let currencies = '';
    let imgFlag;
    let imgCoatOfArms;

    if (country) {
        console.log('Definido', country);
        name = country.translations.spa.common;
        officialName = country.translations.spa.official;
        for (const [, value] of Object.entries(country.currencies)) {
            currencies += `${value.name} (${value.symbol}) `;
        }
        nativeName = Object.entries(country.name.nativeName)[0][1].official
        capital = country.capital[0];
        population = country.population;
        imgFlag = country.flags;
        imgCoatOfArms = country.coatOfArms;
    }
    return (
        <>
            <h1>Detalles de país</h1>
            <section className="country-card">
                <div className="country-card-title">
                    <h1 id="country-common-name">Nombre</h1>
                </div>
                <div className="country-card-body d-flex">
                    <div className="country-card-body">
                        <div className="country-field">
                            Nombre común: <span>{name}</span>
                        </div>
                        <div className="country-field">
                            Nombre oficial: <span>{officialName}</span>
                        </div>
                        <div className="country-field">
                            Nombre nativo: <span>{nativeName}</span>
                        </div>
                        <div className="country-field">
                            Capital: <span>{capital}</span>
                        </div>
                        <div className="country-field">
                            Población: <span>{population}</span> hab.
                        </div>

                        <div className="country-field">
                            Moneda: <span>{currencies}</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="country-img">
                            <img src={imgFlag?.svg} alt={imgFlag?.alt}/>
                        </div>

                        <div className="country-img">
                            <img src={imgCoatOfArms?.svg} alt={imgCoatOfArms?.alt}/>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
}


export default CountryDetailPage;