import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react';
import { calculatorOutline, trashOutline } from 'ionicons/icons';
import React from 'react'

interface IBmiControls {
    onCalculate(): void,
    onReset(): void
}

const BmiControls: React.FC<IBmiControls> = (props) => {

    return (
        <IonRow>
            <IonCol className='ion-text-left'>
                <IonButton onClick={props.onCalculate}>
                    <IonIcon slot="start" icon={calculatorOutline} />
                    Calcular
                </IonButton>
            </IonCol>
            <IonCol className='ion-text-right'>
                <IonButton color="danger" onClick={props.onReset}>
                    <IonIcon slot="start" icon={trashOutline} />
                    Borrar
                </IonButton>
            </IonCol>
        </IonRow>
    )
}

export default BmiControls;