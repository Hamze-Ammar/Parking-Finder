import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
  reverseGeocodeAsync,
} from "expo-location";

import Title from "../../ui/Title";
import { Button } from "../../ui/Button";

import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app"
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    // console.log({ latitude }, { latitude });
    let regionName = await reverseGeocodeAsync({
      latitude: latitude,
      longitude: longitude,
    });
    console.log(regionName);
  }

  async function handleClick() {
    if (locationPermissionInformation.status === "denied") {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    await getLocationHandler();
    if (locationPermissionInformation.status === "granted") {
      navigation.navigate("parking");
    }
  }

  return (
    <View style={styles.textContainer}>
      <Title myFontSize={35}>Reinventing The Wheels</Title>
      <Title myFontSize={22}>Life is too short to be spent on PARKING!</Title>
      <Button onPress={handleClick}>GO</Button>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    margin: 15,
    marginBottom: 25,
  },
});
