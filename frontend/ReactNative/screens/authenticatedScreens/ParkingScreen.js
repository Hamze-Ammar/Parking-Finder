import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Slot from "../../components/parkingPage/Slot";
import { Button } from "../../ui/Button";
import { Colors } from "../../constants/styles";

const ParkingScreen = () => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.parking}>
          <View style={styles.outerContainer}>
            <View style={styles.container}>
              <Slot name={"empty"} />
              <Slot name={"left"} />
              <Slot name={"left"} />
              <Slot name={"empty"} />
              <Slot name={"left"} />
              <Slot name={"left"} />
              <Slot name={"empty"} />
              <Slot name={"left"} />
              <Slot name={"left"} />
            </View>
            <View style={styles.container}>
              <Slot name={"empty"} />
              <Slot name={"right"} />
              <Slot name={"right"} />
              <Slot name={"empty"} />
              <Slot name={"empty"} />
              <Slot name={"right"} />
              <Slot name={"right"} />
              <Slot name={"empty"} />
              <Slot name={"right"} />
            </View>
          </View>
          <View style={styles.gate}></View>
        </View>

        <View style={styles.btnContainer}>
          <Button>7 available slots</Button>
        </View>
      </View>
    </>
  );
};

export default ParkingScreen;

const styles = StyleSheet.create({
  main: {
    // justifyContent: "center",
  },
  parking: {
    backgroundColor: "#eee",
    // padding: 10,
  },
  gate: {
    height: 15,
    backgroundColor: Colors.secondary500,
    width: 100,
    alignSelf: "center",
  },
  outerContainer: {
    borderWidth: 10,
    borderBottomWidth: 0,
    // padding: 10,
    // paddingBottom: 0,

    borderColor: Colors.background500,
    // flex: 1,
    flexDirection: "row",
    // alignItems: "baseline",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
  },
  btnContainer: {
    alignItems: "center",
  },
});
