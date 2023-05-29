import React from "react";
import FilmCard from "../filmCard/filmCard";
import './filmList.css'

/**
 * Componente que renderiza una lista de películas
 * @param {*} props 
 * @returns 
 */
const FilmList = (props) => {
    const films = props.films;
    return (
        <div className="peliculas">
            {films.map(film => {
                return (
                    <FilmCard key={film.id} film={film} />
                )
            })}
        </div>
    )
}


export default FilmList;