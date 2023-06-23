import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";


const MainMenu: React.FC = () => {

  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu>
  );
}

export default MainMenu;