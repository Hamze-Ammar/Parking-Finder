import { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { getParkingByCityName } from "../../components/mapFolder/mapController";
import { FavoritesContext } from "../../store/favorites-context";
import { AuthContext } from "../../store/auth-context";
import { mapStyleLight, mapStyleDark } from "../../constants/mapStyle";
import PopupParking from "../../components/mapFolder/PopupParking";
import { dimensions } from "../../constants/styles";
import { displayPopup } from "../../components/mapFolder/mapController";
import { findNearestParkings } from "../../components/mapFolder/mapController";
import PopWhatFound from "../../components/mapFolder/PopWhatFound";
// import RNGestureHandlerButton from "react-native-gesture-handler/lib/typescript/components/GestureHandlerButton";

const MapScreen = ({ route, navigation }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(authCtx.token || null);
  const [city, setCity] = useState(route.params?.city || null);
  const [latitude, setLatitude] = useState(route.params?.latitude || null);
  const [newLatitude, setNewLatitude] = useState(
    route.params?.latitude || null
  );
  const [longitude, setLongitude] = useState(route.params?.longitude || null);
  const [newLongitude, setNewLongitude] = useState(
    route.params?.longitude || null
  );
  const [parkings, setParkings] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [parkingPop, setParkingPop] = useState();
  const [radius, setRadius] = useState(1000); // Initial value for the radius
  const [numOfParkings, setNumOfParkings] = useState(0);
  // console.log(city, token, latitude, longitude);
  console.log({ numOfParkings });
  useEffect(() => {
    async function reloadData() {
      if (city && token) {
        // let radius = 2160; // initial screen radius
        // let response = await getParkingByCityName({ city: city, token: token });
        let response = await findNearestParkings(
          newLatitude,
          newLongitude,
          radius,
          token
        );
        // console.log(response.length);
        setNumOfParkings(response.length);
        setParkings(response);
      }
    }
    reloadData();
  }, [newLatitude, radius]);

  // Testing
  const updateRadiusAndFetch = (region) => {
    setNewLatitude(region.latitude);
    setNewLongitude(region.longitude);
    // console.log(region.latitudeDelta);
    let newRadius = region.longitudeDelta * 53 * 1609; // to miles to meters; it covers a square where square_side = height of the screen
    setRadius(newRadius);
  };
  return (
    <>
      <MapView
        style={styles.container}
        customMapStyle={isDark ? mapStyleDark : mapStyleLight}
        initialRegion={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}
        EdgePadding={{
          top: 100,
        }}
        mapPadding={{
          top: 20,
          left: 20,
          right: 20,
        }}
        minZoomLevel={7} // default => 0
        maxZoomLevel={18} // default => 20
        showsUserLocation={true}
        onPress={() => setParkingPop(null)}
        onRegionChangeComplete={(region) => updateRadiusAndFetch(region)}
      >
        {parkings &&
          parkings.map((parking) => {
            // console.log(parking);
            // let location = JSON.parse(parking.location);
            let latitudeDes = parking.latitude;
            let longitudeDes = parking.longitude;
            let description = parking.freeSlots + " Available Slots";
            let id = parking.id;
            return (
              <Marker
                coordinate={{
                  latitude: parseFloat(latitudeDes),
                  longitude: parseFloat(longitudeDes),
                }}
                icon={require("../../assets/images/iconMarker2.png")}
                key={id}
                title={parking.name}
                description={description}
                onPress={async () => {
                  setParkingPop(
                    await displayPopup({
                      parking: parking,
                      latitude: latitude,
                      longitude: longitude,
                    })
                  );
                }}
                onCalloutPress={() => {
                  navigation.navigate("Parking", {
                    city: { city },
                    id: id,
                  });
                }}
              />
            );
          })}
        <Marker
          coordinate={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          }}
          icon={require("../../assets/images/iconHere.png")}
          title="PIN"
          description="You are here!"
          onCalloutPress={() => handleClick()}
          // onPress={handleClick}
        />

        {/* <Marker
          draggable
          coordinate={{
            latitude: parseFloat(33.8811743),
            longitude: parseFloat(35.5059504),
          }}
          onDragEnd={(e) => {
            console.log(e.nativeEvent.coordinate);
          }}
        /> */}
      </MapView>
      <View style={styles.popupInfo}>
        {parkingPop && <PopupParking parking={parkingPop} city={city} />}
      </View>

      <View style={[styles.popupInfo, { bottom: 10 }]}>
        {!parkingPop && <PopWhatFound numOfParkings={numOfParkings} />}
      </View>

      <View style={styles.themIcon}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={28}
          color={isDark ? "#a213ff" : "#333"}
          onPress={() => {
            setIsDark(!isDark);
          }}
        />
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themIcon: {
    position: "absolute",
    margin: 10,
    padding: 5,
    top: 70,
    right: 23,
    color: "gray",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  popupInfo: {
    position: "absolute",
    bottom: 60,
    left: Math.round(dimensions.width / 20),
    right: Math.round(dimensions.width / 20),
  },
});
