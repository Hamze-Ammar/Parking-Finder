import { Text, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";

export function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
}) {
  console.log("placeholder", placeholder);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    width: 330,
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.background500,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
