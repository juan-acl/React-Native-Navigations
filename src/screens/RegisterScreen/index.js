import React from "react";
import { View, Text, Button } from "react-native";

const RegisterScreen = (props) => {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View>
      <Text>RegisterScreen</Text>
      <Button onPress={goToPage} title="Ir a Inicio" />
    </View>
  );
};

export default RegisterScreen;
