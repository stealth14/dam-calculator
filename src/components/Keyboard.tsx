import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import "./Calculator.css";

export default function Keyboard() {
  function renderKeys() {
    let values = new Array(10).keys();

    const keys = Array.from(values).map((value) => {
      return (
        <IonCol key={`row_${value}`}>
          <IonButton expand="full">{value}</IonButton>
        </IonCol>
      );
    });

    const rows = new Array(3).keys();

    return Array.from(rows).map((row) => {
      const base = row * 3;
      const rowKeys = [...keys.slice(base + 1, base + 4)];

      return <IonRow key={`row_${row}`}>{rowKeys}</IonRow>;
    });
  }

  return (  
    <IonGrid>
      {renderKeys()}
    </IonGrid>
  );
}
