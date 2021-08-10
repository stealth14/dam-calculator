import { useState } from "react";

import { IonCard } from "@ionic/react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { validateInput } from "../lib/operations";

export default function Calculator() {
  const [value, setValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState("");

  const perform = () => {
    switch (operation) {
      case "+":
        setValue((Number(value) + Number(previousValue)).toString());
        break;
      case "-":
        setValue((Number(value) - Number(previousValue)).toString());
        break;
      case "*":
        setValue((Number(value) * Number(previousValue)).toString());
        break;
      case "/":
        setValue((Number(value) / Number(previousValue)).toString());
        break;
    }
    setPreviousValue("");
  };

  const clear = () => {
    setValue("");
    setPreviousValue("");
  }

  return (
    <IonCard>
      <Display value={value} />
      <Keyboard
        onPress={(newValue: number) => {
          if (!validateInput(value, newValue)) return;

          setValue([value, "", newValue].join(""));
        }}
        onOperationSelected={(newOperation: string) => {
          setOperation(newOperation);
          setPreviousValue(value);
          setValue("");
        }}
        onPerform={perform}
        onClear={clear}
      />
    </IonCard>
  );
}
