import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = (props) => {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View>
      <Text>Home screen</Text>
      <Button onPress={goToPage} title="Crear cuenta" />
    </View>
  );
};

export default HomeScreen;
