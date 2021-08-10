import { IonItem, IonInput, IonLabel } from "@ionic/react";

interface DisplayProps {
  value: number;
}

export default function Display(props: DisplayProps) {
  const { value } = props;

  return (
    <IonItem>
      <IonInput disabled value={value}/>
    </IonItem>
  );
}
