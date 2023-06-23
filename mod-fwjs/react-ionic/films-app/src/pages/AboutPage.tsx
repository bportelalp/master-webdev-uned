import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage } from "@ionic/react";
import React from "react";

/**
 * Muestra la información de la página
 * @returns 
 */
const AboutPage: React.FC = () => {

  return (
    <IonPage className="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Films App con Ionic + React</IonCardTitle>
          <IonCardSubtitle>Frameworks de JavaScript para Front-end y dispositivos móviles</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Esta es una aplicación desarrollada para la práctica de Ionic + React de la asignatura que se indica en el título. Es muy similar
          a la desarrollada con React pero esta vez usando el Framework ionic.
        </IonCardContent>
      </IonCard>
    </IonPage>
  )
}

export default AboutPage;