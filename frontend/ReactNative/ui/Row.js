import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Row = ({ id, name, address, totalSlots, openAt, closeAt }) => {
  console.log({ id });
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View style={styles.left}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.txtRow}>
            <MaterialIcons name="location-city" size={18} color="gray" />
            <Text style={styles.text}>{address}</Text>
          </View>
          <View style={styles.txtRow}>
            <MaterialIcons name="account-tree" size={18} color="gray" />
            <Text style={styles.text}>{totalSlots} total slots</Text>
          </View>
          <View style={styles.txtRow}>
            <Ionicons name="time" size={18} color="gray" />
            <Text style={styles.text}>
              Open from: {openAt}:00am To {closeAt}:00pm
            </Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.right}>
        <MaterialIcons name="delete" size={30} color="#ff7070" />
      </View>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 120,
    backgroundColor: Colors.background200,
    borderRadius: 10,
    padding: 7,
    marginBottom: 15,
    borderLeftWidth: 15,
    borderLeftColor: Colors.secondary500,
  },
  left: {
    flex: 5,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  text: {
    color: "gray",
    marginLeft: 7,
  },
  txtRow: {
    flexDirection: "row",
  },
});
