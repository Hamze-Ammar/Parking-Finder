import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";

const ReservedSlot = () => {
  return (
    <View style={styles.container}>
      <Text>ReservedSlot</Text>
    </View>
  );
};

export default ReservedSlot;

const styles = StyleSheet.create({
  container: {
    width: 86,
    height: 72,
    backgroundColor: Colors.secondary500,
  },
});
