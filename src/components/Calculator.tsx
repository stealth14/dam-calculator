import { IonCard } from "@ionic/react";
import Display from "./Display";
import Keyboard from "./Keyboard";

export default function Calculator() {
  return (
    <IonCard>
      <Display value={22} />
      <Keyboard />
    </IonCard>
  );
}
