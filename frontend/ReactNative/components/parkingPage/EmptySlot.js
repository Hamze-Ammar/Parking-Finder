import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const EmptySlot = () => {
  return (
    <View>
      <Image source={require("../../assets/images/busySlotLeft.png")} />
    </View>
  );
};

export default EmptySlot;

const styles = StyleSheet.create({});
