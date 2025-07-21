import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
const App = () => {
  return (
    <GestureHandlerRootView>
        <RootNavigation />
        <Toast/>
    </GestureHandlerRootView>
  );
};
export default App;
