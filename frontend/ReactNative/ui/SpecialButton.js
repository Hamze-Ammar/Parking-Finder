import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/styles";
import { BorderRadius } from "../constants/styles";

export function SpecialButton({ children, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 40,
  },
  button: {
    width: 330,
    height: 60,
    borderRadius: BorderRadius.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 10,
    backgroundColor: Colors.secondary500,
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
    fontSize: 16,
    fontWeight: "100",
  },
});
