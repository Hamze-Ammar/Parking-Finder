import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "../constants/styles";

const InputEdit = ({
  label,
  isInvalid,
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
}) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.label}>{label}</Text>
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
    </View>
  );
};

export default InputEdit;

const styles = StyleSheet.create({
  outerContainer: {
    alignSelf: "center",
  },
  inputContainer: {
    marginVertical: 4,
  },
  label: {
    marginLeft: 4,
    color: "gray",
  },
  input: {
    width: 318,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.background200,
    borderRadius: 8,
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.background500,
  },
  inputInvalid: {
    borderWidth: 2,
    borderColor: Colors.error100,
  },
});
