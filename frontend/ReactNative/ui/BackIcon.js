import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants/styles";

const BackIcon = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.icon, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <AntDesign name="back" size={36} color={Colors.primary500} />
      </View>
    </Pressable>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  icon: {
    color: Colors.primary500,
  },
  pressed: {
    color: Colors.secondary500,
  },
});
