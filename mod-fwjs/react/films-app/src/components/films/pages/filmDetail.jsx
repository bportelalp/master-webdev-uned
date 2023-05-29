import React from "react";
import { useParams } from "react-router-dom";

/**
 * Página de detalle de película
 * @param {*} props 
 * @returns 
 */
const FilmDetail = (props) => {
    let {titleFilm} = useParams();
    return (
        <h1>{titleFilm}</h1>

    )
}


export default FilmDetail;