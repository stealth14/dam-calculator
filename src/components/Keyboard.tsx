import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import "./Calculator.css";

interface KeyboardProps {
  onPress: Function;
  onOperationSelected: Function;
  onPerform: Function;
  onClear: Function;
}

export default function Keyboard(props: KeyboardProps) {
  const { onPress, onOperationSelected, onPerform, onClear } = props;

  function numericKeys() {
    let values = new Array(11).keys();

    const keys = Array.from(values)
      .slice(0)
      .reverse()
      .map((value) => {
        return (
          <IonCol key={`column_${value}`}>
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
      <IonCol key={`column_${","}`}>
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

  function operationKeys() {
    const operations = ["", "+", "-", "*", "/", "C", "="];

    const rows = new Array(3).keys();

    const keys = operations.map((operation) => {
      let onClick = () => {};
      switch (operation) {
        case "C":
          onClick = () => onClear();
          break;
        case "=":
          onClick = () => onPerform(operation);
          break;
        default:
          onClick = () => onOperationSelected(operation);
          break;
      }

      return (
        <IonCol key={`column_${operation}`}>
          <IonButton
            onClick={onClick}
            expand="full"
            color="success"
          >
            {operation}
          </IonButton>
        </IonCol>
      );
    });

    return Array.from(rows).map((row) => {
      const base = row * 3;
      const rowKeys = [...keys.slice(base + 1, base + 4)];

      return <IonRow key={`row_${row}`}>{rowKeys}</IonRow>;
    });
  }

  return (
    <IonGrid>
      {operationKeys()}
      {numericKeys()}
    </IonGrid>
  );
}
