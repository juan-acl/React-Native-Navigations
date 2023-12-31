import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

const StackNavigator = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <StackNavigator.Navigator initialRouteName="HomeScreen">
      {/* La primera screen que se defina es la que se va mostrar por defecto es decir el orden importa, o podriamos utilizar el initialRouteName donde le indicamos el valor  */}
      <StackNavigator.Screen name="RegisterScreen" component={RegisterScreen} />
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
    </StackNavigator.Navigator>
  );
};

export default NavigationStack;
