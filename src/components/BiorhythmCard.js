import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY');
}


function BiorhythmCard( {targetDate} ){

    return (
        <IonCard class="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Physical: 83%</p>
            <p>Emotional: 34%</p>
            <p>Intellectual: 52%</p>
          </IonCardContent>
        </IonCard>
    );
    
}

export default BiorhythmCard;