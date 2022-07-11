import { Text, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";
import { BorderRadius } from "../constants/styles";

export function Input({
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        placeholder={placeholder}
        value={value}
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
    borderRadius: BorderRadius.primary,
    fontSize: 16,
  },
  inputInvalid: {
    borderWidth: 2,
    borderColor: Colors.error100,
  },
});
