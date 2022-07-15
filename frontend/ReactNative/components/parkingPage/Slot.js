import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/styles";
import { sendReservation } from "./parkingController";

const Slot = ({ id, state, side, number, setRefresh, setShowTimer }) => {
  // Preparing images
  const images = {
    empty: require("../../assets/images/emptySlot.png"),
    left: require("../../assets/images/busySlotLeft.png"),
    right: require("../../assets/images/busySlotRight.png"),
  };

  const [localState, setLocalState] = useState(state);
  // console.log(localState, number);
  function onPress() {
    if (localState === "empty") {
      sendReservation(id);
      setRefresh();
      setShowTimer(true);
    }
  }

  // Localy reset the state of the slot after reservation time ends
  function resetSlotState() {
    console.log(localState);
    // setTimeout(() => {
    console.log("timeout?");
    console.log({ localState });
    setLocalState("empty");
    console.log({ localState });
    // }, 10000);
  }

  // Change Color of slot number in front of each slot based on status
  let color = false;
  if (localState === "empty") {
    color = true;
  }

  // Handling display for the right column of cars in parking => Rotation
  if (side === "right") {
    return (
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <View style={[styles.slotContainer, styles.slotContainerReverse]}>
          <Image style={styles.image} source={images[localState]} />

          <Text
            style={[styles.text, styles.textReverse, color && styles.colored]}
          >
            {number}
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.slotContainer}>
        <Image style={styles.image} source={images[localState]} />
        <Text style={[styles.text, , color && styles.colored]}>{number}</Text>
      </View>
    </Pressable>
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
  pressed: {
    opacity: 0.7,
  },
  image: {
    opacity: 0.7,
  },
});
