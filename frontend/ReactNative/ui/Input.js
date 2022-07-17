import { View, TextInput, StyleSheet } from "react-native";
import { Colors, BorderRadius } from "../constants/styles";

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
        autoCapitalize="none"
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
    backgroundColor: Colors.background200,
    borderRadius: BorderRadius.primary,
    fontSize: 16,
  },
  inputInvalid: {
    borderWidth: 2,
    borderColor: Colors.error100,
  },
});
