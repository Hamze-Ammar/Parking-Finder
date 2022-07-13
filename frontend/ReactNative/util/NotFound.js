import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={24} color="black" />
      <Text style={styles.title}>NotFound</Text>
      <Text>Try again later</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 18,
  },
});
