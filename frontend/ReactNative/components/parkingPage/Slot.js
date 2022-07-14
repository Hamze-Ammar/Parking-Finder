import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";
import { sendReservation } from "./parkingController";
import ReservedSlot from "./ReservedSlot";

const Slot = ({ id, name, side, number, SetRefresh, is_reserved }) => {
  const test = {
    empty: require("../../assets/images/emptySlot.png"),
    left: require("../../assets/images/busySlotLeft.png"),
    right: require("../../assets/images/busySlotRight.png"),
  };
  // console.log(is_reserved == true);

  function onPress() {
    if (name === "empty") {
      sendReservation(id);
      SetRefresh();
    }
  }

  let color = false;
  if (name === "empty") {
    color = true;
  }

  // if (is_reserved == true) {
  //   return <>
  //   <ReservedSlot />
  //   </>
  // }

  if (side === "right") {
    return (
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <View style={[styles.slotContainer, styles.slotContainerReverse]}>
          {is_reserved ? (
            <ReservedSlot />
          ) : (
            <Image style={styles.image} source={test[name]} />
          )}
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
        <Image source={test[name]} />
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
    opacity: 0.5,
  },
});
