import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../../ui/Title";
import { Button } from "../../ui/Button";

import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();

  function handleClick() {
    navigation.replace("parking");
  }

  return (
    <View style={styles.textContainer}>
      <Title myFontSize={35}>Reinventing The Wheels</Title>
      <Title myFontSize={22}>Life is too short to be spent on PARKING!</Title>
      <Button onPress={handleClick}>GO</Button>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    margin: 15,
    marginBottom: 25,
  },
});
