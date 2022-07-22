import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
  reverseGeocodeAsync,
} from "expo-location";
import { AuthContext } from "../../store/auth-context";
import LoadingOverlay from "../../ui/LoadingOverlay";
import Title from "../../ui/Title";
import { Button } from "../../ui/Button";
import { saveRequestToServer } from "./landingController";

import { useNavigation } from "@react-navigation/native";
// import DashedCircle from "../../ui/DashedCircle";

const LandingPage = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    // console.log(PermissionStatus);
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
    // console.log(location);
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;

    let regionName = await reverseGeocodeAsync({
      latitude: latitude,
      longitude: longitude,
    });
    if (regionName) {
      let response = {
        // address: regionName,
        address: regionName,
        latitude: latitude,
        longitude: longitude,
      };
      return response;
    } else {
      return null;
    }
  }
  async function handleClick() {
    if (!locationPermissionInformation?.status) {
      return;
    }
    // console.log(locationPermissionInformation.status);
    setIsLoading(true);
    if (locationPermissionInformation.status === "denied") {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    const response = await getLocationHandler();
    // Should navigate to map screen

    if (response?.address) {
      // console.log(response.latitude);
      let cityName = response.address[0].city;
      // console.log(cityName);
      // CityName here could differ from request to another
      // Should check all possibilities or find another way to getParkings than by cityName
      if (["Beirut", "Bayrut", "بيروت"].includes(cityName)) {
        cityName = "Beirut";
      }
      saveRequestToServer(cityName, authCtx.token);
      // console.log(cityName);
      navigation.navigate("map", {
        // city: cityName,
        city: "beirut",
        latitude: response.latitude,
        longitude: response.longitude,
      });
    }

    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.mainContainer}>
      <Title myFontSize={37}>Reinventing The Wheels</Title>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 340, height: 170 }}
          source={{
            uri: "https://cdn.dribbble.com/users/441371/screenshots/2231734/media/b690d5542e4929819b713593361bd010.gif",
          }}
        />
      </View>

      <View style={styles.btnContainer}>
        <Title style={styles.subtitleContainer} myFontSize={15}>
          Life is too short to be spent on PARKING!
        </Title>
        <Button onPress={handleClick}>GO</Button>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    margin: 15,
    marginBottom: 25,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  subtitleContainer: {
    fontSize: 20,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
    opacity: 0.8,
  },
});
