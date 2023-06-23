import { IonPage } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import filmsJson from "../../assets/movies.json"

interface FilmDetailParams {
  idFilm: string,
  titleFilm: string
}

const FilmDetailPage: React.FC = () => {
  const { idFilm, titleFilm } = useParams<FilmDetailParams>();
  const film = filmsJson.filter(f => f.id == +idFilm)[0];
  const imgUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face' + film.poster_path
  return (
    <IonPage className="ion-padding">
      <div>
        <h2>{titleFilm}</h2>
        <img alt={titleFilm} src={imgUrl}/>
      </div>
    </IonPage>
  );
}

export default FilmDetailPage;