import { useState } from "react";

import { IonCard } from "@ionic/react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { validateInput } from "../lib/operations";

export default function Calculator() {
  const [value, setValue] = useState("");

  return (
    <IonCard>
      <Display value={value} />
      <Keyboard
        onPress={(newValue: number) => {
          if(!validateInput(value, newValue)) return;
          
          setValue([value, '', newValue].join(''));
        }}
      />
    </IonCard>
  );
}
