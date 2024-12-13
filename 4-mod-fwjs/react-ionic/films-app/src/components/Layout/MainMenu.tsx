import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

/**
 * Menú con enlaces a las diferentes páginas
 * @returns 
 */
const MainMenu: React.FC = () => {

  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem routerLink="/home">
          Home
        </IonItem>
        <IonItem routerLink="/about">
          About
        </IonItem>
      </IonContent>
    </IonMenu>
  );
}

export default MainMenu;