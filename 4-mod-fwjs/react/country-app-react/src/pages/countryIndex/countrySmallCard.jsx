import React from "react";
import './countrySmallCard.css'

const CountrySmallCard = (props) => {
    const country = props.country;
    const linkCountry = `/country/${country.name.common}`
    return (
        <div className="country-container">
            <img className="country-flag" src={country.flags.png} alt={country.flags.alt}/>
            <figcaption>
                <a href={linkCountry}>{country.translations.spa.common}</a>
                
                </figcaption>
        </div>
    )
};



export default CountrySmallCard;