import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";
import { capitalizeFirstLetter } from "./parkingController";

const ParkingHeader = ({ name, total, available_slots, min_away }) => {
  const [duration, suffix] = min_away.split(" ");
  let time = capitalizeFirstLetter(suffix); // Capitalize the word 'minute'
  // console.log(suffix)
  return (
    <>
      <View style={styles.info}>
        <View style={styles.infoCol}>
          <Text style={styles.bold}>{total}</Text>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>Spots</Text>
        </View>
        <View style={styles.infoCol}>
          <Text style={styles.bold}>{available_slots}</Text>
          <Text style={styles.text}>Slots</Text>
          <Text style={styles.text}>Available</Text>
        </View>
        <View style={styles.infoCol}>
          <Text style={styles.bold}>{duration}</Text>
          <Text style={styles.text}>{time}</Text>
          <Text style={styles.text}>Away</Text>
        </View>
      </View>
    </>
  );
};

export default ParkingHeader;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
    margin: 8,
  },
  title: {
    // marginLeft: 10,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary500,
    // marginBottom: 8,
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.background500,
    // marginHorizontal: 20,
    // marginBottom: 5,
    padding: 5,
    borderRadius: 10,
    borderColor: Colors.secondary500,
  },
  infoCol: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 22,
    color: Colors.primary500,
  },
  text: {
    color: Colors.secondary500,
  },
});
