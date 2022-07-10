import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomLink = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomLink;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontWeight: "300",
  },
});
