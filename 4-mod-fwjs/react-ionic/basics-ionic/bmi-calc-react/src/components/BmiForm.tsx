import { IonAlert, IonCard, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';
import React, { useState, useRef } from 'react';
import BmiControls from './BmiControls';

const BmcForm: React.FC = () => {
    const heightRef = useRef<HTMLIonInputElement>(null);
    const weightRef = useRef<HTMLIonInputElement>(null);
    const [bmi, setBmi] = useState<number | undefined>(undefined);
    const [error, setError] = useState<string>('');


    const calcBMI = () => {
        const height = heightRef.current!.value;
        const weight = weightRef.current!.value;

        if (!height || !weight || +height <= 0 || +weight <= 0) {

            setBmi(undefined)
            setError('Por favor, introduce un número válido');
            return;
        }

        const bmi = +weight / (+height * +height);
        setBmi(bmi);
    };

    const resetInputs = () => {
        heightRef.current!.value = '';
        weightRef.current!.value = '';
        setBmi(undefined);
    };

    let resultHtml = <></>;
    if (bmi !== undefined) {
        resultHtml = (
            <IonCard>
                <h2>{bmi}</h2>
            </IonCard>
        )
    }

    return (
        <>
            <IonItem>
                <IonLabel position="floating">Altura (m)</IonLabel>
                <IonInput ref={heightRef} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Peso (kg)</IonLabel>
                <IonInput ref={weightRef} />
            </IonItem>
            <IonGrid className="ion-text-center ion-margin">
                <BmiControls onCalculate={calcBMI} onReset={resetInputs} />
                <IonRow>
                    <IonCol>
                        {resultHtml}
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonAlert
                isOpen={!!error}
                header="Error"
                message={error}
                buttons={[{ text: 'OK', handler: () => { setError('') } }]}
            />
        </>
    )
}

export default BmcForm;