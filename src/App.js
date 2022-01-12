import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const[ name, setName ] = useState('');
  const[ birthDate, setBirthDate ] = useState('');
  const targetDate = new Date().toString();
  
  

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Date Of Birth:</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY' value={birthDate} onIonChange={(event)=>setBirthDate(event.detail.value)}/>
        </IonItem>
        <BiorhythmCard targetDate={targetDate}/>
        
      </IonContent>
    </IonApp>
  );
}

export default App;
