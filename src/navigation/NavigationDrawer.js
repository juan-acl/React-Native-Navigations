import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

const DrawerNavigation = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator initialRouteName="HomeScreen">
      <DrawerNavigation.Screen name="HomeScreen" component={HomeScreen} />
      <DrawerNavigation.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </DrawerNavigation.Navigator>
  );
};

export default NavigationDrawer;
