import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MsgNotFound = () => {
  return (
    <View style={styles.container}>
      <Text>No saved parkings were found</Text>
      <Text>Start creating you list!</Text>
    </View>
  );
};

export default MsgNotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 200,
  },
});
