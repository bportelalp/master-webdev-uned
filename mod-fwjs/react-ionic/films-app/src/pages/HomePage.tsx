import { IonContent,  IonPage, } from '@ionic/react';
import './Home.css';
import filmsJson from "../../assets/movies.json"
import FilmList from '../components/Films/FilmList';

/**
 * Componente página principal con visualización de 5 peliculas
 * @returns 
 */
const HomePage: React.FC = () => {
  const films = filmsJson.slice(0,5)
  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">
        <h2>Películas recientes</h2>
        <FilmList films={films}/>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
