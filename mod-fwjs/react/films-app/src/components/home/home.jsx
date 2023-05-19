import React from "react";
import filmsJson from '../../assets/movies.json'
import './home.css'
import FilmCard from "./filmCard";

const Home = () => {
    const films = filmsJson.slice(0, 5);
    // Construccion de la lista completa de películas
    return (
        <>
            <div className="home">
                <h2>Películas recientes</h2>
                <div className="peliculas">
                    {films.map(film => {
                        return (
                            <FilmCard key={film.id} film={film} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Home