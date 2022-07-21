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

const MapScreen = ({ route, navigation }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(authCtx.token || null);
  const [city, setCity] = useState(route.params?.city || null);
  const [latitude, setLatitude] = useState(route.params?.latitude || null);
  const [longitude, setLongitude] = useState(route.params?.longitude || null);
  const [parkings, setParkings] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [parkingPop, setParkingPop] = useState();
  //   console.log(city, token, latitude, longitude);
  //   console.log({ parkingPop });
  useEffect(() => {
    async function reloadData() {
      if (city && token) {
        let response = await getParkingByCityName({ city: city, token: token });
        // console.log(response);
        setParkings(response);
      }
    }
    reloadData();
  }, [city, token]);

  //=============================
  return (
    <>
      <MapView
        style={styles.container}
        customMapStyle={isDark ? mapStyleDark : mapStyleLight}
        initialRegion={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={() => setParkingPop(null)}
      >
        {parkings &&
          parkings.map((parking) => {
            // console.log(parking);
            let location = JSON.parse(parking.location);
            let latitudeDes = location.latitude;
            let longitudeDes = location.longitude;
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
            latitude: parseFloat(33.8911743),
            longitude: parseFloat(35.5059504),
          }}
          icon={require("../../assets/images/iconHere3.png")}
          title="PIN"
          description="You are here!"
          //   onCalloutPress={calculateDistance}
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
      <View style={styles.themIcon}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={28}
          color={isDark ? "#fff" : "#333"}
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
    top: 50,
    right: 40,
    color: "gray",
  },
  popupInfo: {
    position: "absolute",
    bottom: 60,
    left: Math.round(dimensions.width / 20),
    right: Math.round(dimensions.width / 20),
  },
});
