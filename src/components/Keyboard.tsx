import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import "./Calculator.css";

interface KeyboardProps {
  onPress: Function;
}

export default function Keyboard(props: KeyboardProps) {
  const { onPress } = props;

  function renderKeys() {
    let values = new Array(11).keys();

    const keys = Array.from(values)
      .slice(0)
      .reverse()
      .map((value) => {
        return (
          <IonCol key={`row_${value}`}>
            <IonButton
              onClick={() => onPress(value)}
              fill="clear"
              expand="full"
            >
              {value}
            </IonButton>
          </IonCol>
        );
      });

    keys.push(
      <IonCol key={`row_${","}`}>
        <IonButton onClick={() => onPress(",")} expand="full">
          {","}
        </IonButton>
      </IonCol>
    );

    const rows = new Array(4).keys();

    return Array.from(rows).map((row) => {
      const base = row * 3;
      const rowKeys = [...keys.slice(base + 1, base + 4)];

      return <IonRow key={`row_${row}`}>{rowKeys}</IonRow>;
    });
  }

  return <IonGrid className="ronny">{renderKeys()}</IonGrid>;
}
