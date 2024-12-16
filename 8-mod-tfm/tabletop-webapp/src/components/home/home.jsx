import React, { useEffect, useState } from "react";
import filmsJson from '../../assets/movies.json'
import './home.css'
import FilmList from "../films/filmList/filmList";
import * as api from "../../services/tabletop-client";

const Home = () => {
    const films = filmsJson.slice(0, 5);
    const [filmsApi, setFilms] = useState(films);

    // useEffect(() => {
    //     api.getPopularMovies()
    //         .then(resp => setFilms(resp.sort((a, b) => a.popularity - b.popularity).slice(0, 6)))
    // }, [])

    // Construccion de la lista completa de películas
    return (
        <>
            <div className="home">
                <h2>Películas recientes</h2>
                <FilmList films={filmsApi} />
            </div>
        </>
    );
}

export default Home