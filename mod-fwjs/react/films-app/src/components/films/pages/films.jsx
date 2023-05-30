import React from "react";
import filmsJson from '../../../assets/movies.json'
import FilmList from "../filmList/filmList";
import * as api from '../../../services/filmService'

/**
 * Componente que muestra un catálogo de películas
 * @param {*} props 
 * @returns 
 */
const Films = () => {
    api.getPopularMovies();
    return (
        <>
            <h2>Todas las películas</h2>
            <FilmList films={filmsJson} />
        </>
    )
}


export default Films;