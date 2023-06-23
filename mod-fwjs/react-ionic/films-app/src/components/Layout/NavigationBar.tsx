import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import React from "react"

const NavigationBar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Films app</IonTitle>
        <IonButtons slot="start">
          <IonMenuButton auto-hide="false"></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

export default NavigationBar;