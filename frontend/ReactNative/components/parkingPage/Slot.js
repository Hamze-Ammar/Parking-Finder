import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import React, { useState , useContext } from "react";
import { Colors } from "../../constants/styles";
import { sendReservation } from "./parkingController";
import { useFonts } from "expo-font";
import { AuthContext } from "../../store/auth-context";

const Slot = ({ id, state, side, number, setRefresh, setShowTimer }) => {
  // Preparing images
  const images = {
    empty: require("../../assets/images/emptySlot.png"),
    left: require("../../assets/images/busySlotLeft.png"),
    right: require("../../assets/images/busySlotRight.png"),
    reserved: require("../../assets/images/ReservedSlot.png"),
  };

  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(authCtx.token || null);
  const [localState, setLocalState] = useState(state);
  // console.log(localState, number);
  function onPress() {
    if (localState === "empty") {
      setLocalState("reserved"); // Changed here
      sendReservation(id, token);
      setRefresh();
      setShowTimer(true);
    }
  }

  // Change Color of slot number in front of each slot based on status
  let color = false;
  if (localState === "empty") {
    color = true;
  }

  const [loaded] = useFonts({
    montserratBold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
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
    // position: "absolute",
    // left: 23,
    marginHorizontal: 8,
    color: Colors.secondary500,
    // color: 'Colors.secondary500',
    fontSize: 24,
    // transform: [{ rotate: "90deg" }],
    fontFamily: "montserratBold",
  },
  slotContainerReverse: {
    flexDirection: "row-reverse",
  },
  textReverse: {
    // transform: [{ rotate: "-90deg" }],
    fontFamily: "montserratBold",
  },
  colored: {
    color: Colors.primary500,
    // display: 'none',
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    opacity: 0.7,
  },
});
