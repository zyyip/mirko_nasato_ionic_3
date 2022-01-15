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
import { useLocalStorage } from './hooks';


function App() {
  const[ targetDate, setTargetDate ] = useState(new Date().toString());
  const[ birthDate, setBirthDate ] = useLocalStorage('birthDate', '');
  // const targetDate = new Date().toString();
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate &&
         <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>
        }

        <IonItem>
          <IonLabel position="stacked">Date Of Birth:</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY' value={birthDate} onIonChange={(event)=>setBirthDate(event.detail.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY' value={targetDate} onIonChange={(event)=>setTargetDate(event.detail.value)}/>
        </IonItem>
        
      </IonContent>
    </IonApp>
  );
}

export default App;
