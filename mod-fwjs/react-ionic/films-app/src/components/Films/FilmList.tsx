import React from "react";
import { Film } from "../../interfaces/Film";
import FilmCard from "./FilmCard";
import './FilmList.css'

interface FilmListProps {
  films: Film[]
}

/**
 * Componente de representación de un listado de películas
 * @param props 
 * @returns 
 */
const FilmList: React.FC<FilmListProps> = props => {
  const films: Film[] = props.films;

  return (
    <div className="film-list">
      {films.map(film => {
        return (
          <FilmCard key={film.id} film={film}/>
        );
      })}
    </div>
  );
}

export default FilmList;