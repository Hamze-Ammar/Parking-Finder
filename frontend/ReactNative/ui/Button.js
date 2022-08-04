import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/styles";
import { BorderRadius } from "../constants/styles";

export function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 330,
    height: 60,
    borderRadius: BorderRadius.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 10,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "500",
  },
});
