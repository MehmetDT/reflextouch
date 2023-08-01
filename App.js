import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AllStack from "./src/routes";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <NavigationContainer>
      <AllStack />

    </NavigationContainer>
  );
});

export default App;
