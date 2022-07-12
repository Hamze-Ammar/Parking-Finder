import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../constants/styles";

const Title = ({ children, myFontSize }) => {
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
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
  },
});
