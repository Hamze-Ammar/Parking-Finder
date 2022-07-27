import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/styles";

export default function ButtonUpdate({ children, onPress, mini }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
          mini && styles.myWidth,
        ]}
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
  myWidth: {
    width: 120,
  },
  outerContainer: {
    marginTop: 25,
    alignSelf: "center",
  },
  button: {
    width: 318,
    height: 40,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 10,
    backgroundColor: Colors.primary500,
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
    color: Colors.background200,
    fontSize: 16,
    fontWeight: "600",
  },
});
