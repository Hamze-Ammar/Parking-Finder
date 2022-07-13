import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Slot = ({ name }) => {
  var test = {
    empty: require("../../assets/images/emptySlot.png"),
    left: require("../../assets/images/busySlotLeft.png"),
    right: require("../../assets/images/busySlotRight.png"),
  };

  return (
    <View>
      <Image source={test[name]} />
    </View>
  );
};

export default Slot;

const styles = StyleSheet.create({});
