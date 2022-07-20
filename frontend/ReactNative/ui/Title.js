import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../constants/styles";

const Title = ({ children, myFontSize }) => {
  
  const [loaded] = useFonts({
    montserratBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  });
  if (!loaded) {return null;}

  return (
    <View style={styles.textContainer}>
      <Text style={[styles.text, { fontSize: myFontSize }]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  textContainer: {
    margin: 15,
    marginBottom: 25,
  },
  text: {
    fontFamily: "montserratBold",
    color: Colors.secondary500,
    textAlign: "center",
  },
});
