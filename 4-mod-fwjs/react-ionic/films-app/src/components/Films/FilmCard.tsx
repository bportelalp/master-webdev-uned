import React from "react";
import { Film } from "../../interfaces/Film";
import { IonButton, IonCard, IonCardContent, IonIcon, IonItem } from "@ionic/react";
import { addOutline } from 'ionicons/icons'

/**
 * Interfaz para los parámetros recibidos en FilmCard
 */
interface FilmCardProps {
  film: Film
}

/**
 * Representa la información sobre una película
 * @param props 
 * @returns 
 */
const FilmCard: React.FC<FilmCardProps> = props => {
  const film = props.film;
  const imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face' + film.poster_path
  const navigateDetail = `/film-detail/${props.film.id}/${props.film.title}`
  return (
    <IonCard>
      <img alt={film.title} src={imageUrl} />
      <IonCardContent>
        <IonItem routerLink={navigateDetail}>
          <IonButton fill="clear" >
          <IonIcon slot="start" icon={addOutline} />
          Info
        </IonButton>
        </IonItem>
        
      </IonCardContent>
    </IonCard>
  );
}

export default FilmCard;