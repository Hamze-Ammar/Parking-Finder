import { StyleSheet, Text, View } from "react-native";
import InputEdit from "../../../ui/InputEdit";
import ButtonUpdate from "../../../ui/ButtonUpdate";
import { Ionicons } from "@expo/vector-icons";
import { dimensions } from "../../../constants/styles";
import React from "react";

const EditCredentials = ({ setShowInputField }) => {
  return (
    <>
      <Ionicons
        style={styles.close}
        name="close"
        size={24}
        color="gray"
        onPress={setShowInputField}
      />
      <View>
        <InputEdit label="Name" />
        <InputEdit label="Email" />
        <InputEdit label="Password" />
        <InputEdit label="Address" />
      </View>
      <ButtonUpdate>Update</ButtonUpdate>
    </>
  );
};

export default EditCredentials;

const styles = StyleSheet.create({
  close: {
    flex: 1,
    left: dimensions.width - (dimensions.width * 15) / 100,
  },
});
