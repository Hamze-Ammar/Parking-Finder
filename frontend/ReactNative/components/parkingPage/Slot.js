import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";

const Slot = ({ name, side, number }) => {
  var test = {
    empty: require("../../assets/images/emptySlot.png"),
    left: require("../../assets/images/busySlotLeft.png"),
    right: require("../../assets/images/busySlotRight.png"),
  };

  let color = false;
  if (name === "empty") {
    color = true;
  }

  if (side === "right") {
    return (
      <View style={[styles.slotContainer, styles.slotContainerReverse]}>
        <Image source={test[name]} />
        <Text
          style={[styles.text, styles.textReverse, color && styles.colored]}
        >
          {number}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.slotContainer}>
      <Image source={test[name]} />
      <Text style={[styles.text, , color && styles.colored]}>{number}</Text>
    </View>
  );
};

export default Slot;

const styles = StyleSheet.create({
  slotContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 8,
    color: Colors.secondary500,
    fontSize: 28,
    transform: [{ rotate: "90deg" }],
    fontWeight: "bold",
  },
  slotContainerReverse: {
    flexDirection: "row-reverse",
  },
  textReverse: {
    transform: [{ rotate: "-90deg" }],
  },
  colored: {
    color: Colors.primary500,
  },
});
