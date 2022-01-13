import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';
import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhythmChart';

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY');
}


function BiorhythmCard({ birthDate, targetDate }){
  const {physical, emotional, intellectual} = calculateBiorhythms(birthDate, targetDate);

    return (
        <IonCard class="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BiorhythmChart targetDate={targetDate} birthDate={birthDate}/>
            <p>Physical: {physical.toFixed(4)}</p>
            <p>Emotional: {emotional.toFixed(4)}</p>
            <p>Intellectual: {intellectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
    );
    
}

export default BiorhythmCard;