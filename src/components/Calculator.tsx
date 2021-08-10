import { useState } from "react";

import { IonCard } from "@ionic/react";
import Display from "./Display";
import Keyboard from "./Keyboard";

export default function Calculator() {
  const [value, setValue] = useState("");

  return (
    <IonCard>
      <Display value={value} />
      <Keyboard
        onPress={(newValue: number) => {
          setValue([value, '', newValue].join(''));
        }}
      />
    </IonCard>
  );
}
