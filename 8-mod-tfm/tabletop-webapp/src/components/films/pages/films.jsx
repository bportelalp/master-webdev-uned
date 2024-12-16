import React from "react";
import FilmList from "../filmList/filmList";
import * as api from '../../../services/tabletop-client'
import { useState, useEffect } from "react";

/**
 * Componente que muestra un catálogo de películas
 * @param {*} props 
 * @returns 
 */
const Films = () => {
    let [peliculas, setPeliculas] = useState([]);

    // useEffect(() => {
    //     api.getPopularMovies()
    //     .then(resp => setPeliculas(resp))
    // }, [])
    console.log(peliculas);
    return (
        <>
            <h2>Todas las películas</h2>
            <FilmList films={peliculas} />
        </>
    )
}

export default Films;