import React from "react";
import filmsJson from '../../assets/movies.json'
import './home.css'
import FilmList from "../films/filmList/filmList";

const Home = () => {
    const films = filmsJson.slice(0, 5);
    // Construccion de la lista completa de películas
    return (
        <>
            <div className="home">
                <h2>Películas recientes</h2>
                <FilmList films={films}/>
            </div>
        </>
    );
}

export default Home