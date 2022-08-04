import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../constants/styles";

const CustomLink = ({ text, navigateTo }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (navigateTo) {
      navigation.replace(navigateTo);
    }
  };

  return (
    <Pressable
      style={styles.button}
      onPress={handleNavigation}
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
