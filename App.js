import "react-native-gesture-handler";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTabs";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  const [state, setState] = useState({
    name: "",
    lastname: "",
  });

  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
