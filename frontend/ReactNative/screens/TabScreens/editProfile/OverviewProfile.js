import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonUpdate from "../../../ui/ButtonUpdate";
import CircularUserRequests from "./CircularUserRequests";

const OverviewProfile = ({ setShowInputField }) => {
  const handleClick = () => {
    setShowInputField();
  };
  return (
    <View>
      <ButtonUpdate mini={true} onPress={handleClick}>
        Edit
      </ButtonUpdate>
      <View>
        <CircularUserRequests />
      </View>
    </View>
  );
};

export default OverviewProfile;

const styles = StyleSheet.create({});
