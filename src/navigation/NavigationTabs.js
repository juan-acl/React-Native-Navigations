import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

const TabNavigation = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <TabNavigation.Navigator initialRouteName="HomeScreen">
      <TabNavigation.Screen name="HomeScreen" component={HomeScreen} />
      <TabNavigation.Screen name="RegisterScreen" component={RegisterScreen} />
    </TabNavigation.Navigator>
  );
};

export default NavigationTab;
