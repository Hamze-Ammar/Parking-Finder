import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../constants/styles";

const CustomLink = ({ text }) => {
  const navigation = useNavigation();

  function handleClick() {
    if (text === "create an account") {
      navigation.replace("Signup");
    }
  }

  return (
    <Pressable
      // style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      style={styles.button}
      onPress={handleClick}
      android_ripple={{ color: "#64eee3" }}
    >
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default CustomLink;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontWeight: "300",
    color: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
});
