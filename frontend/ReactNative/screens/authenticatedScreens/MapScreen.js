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
const MapScreen = ({ route, navigation }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(authCtx.token || null);
  const [city, setCity] = useState(route.params?.city || null);
  const [parkings, setParkings] = useState();
  const [isDark, setIsDark] = useState(false);
  //   console.log(city, token);
  //   console.log({ parkings });
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

  return (
    <>
      <MapView
        style={styles.container}
        customMapStyle={isDark ? mapStyleDark : mapStyleLight}
        initialRegion={{
          latitude: parseFloat(33.8911743),
          longitude: parseFloat(35.5059504),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {parkings &&
          parkings.map((parking) => {
            let location = JSON.parse(parking.location);
            let latitude = location.latitude;
            let longitude = location.longitude;
            let description = parking.freeSlots + " Available Slots";
            let id = parking.id;
            return (
              <Marker
                coordinate={{
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                }}
                icon={require("../../assets/images/iconMarker2.png")}
                key={id}
                title={parking.name}
                description={description}
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
          onCalloutPress={() => {
            getParkingByCityName({
              city: city,
              token: token,
            });
          }}
        />

        {/* <Marker
          draggable
          coordinate={x}
          onDragEnd={(e) => {
            console.log(e.nativeEvent.coordinate);
          }}
        /> */}
      </MapView>
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
});

{
  /*
    <SafeAreaView style={styles.container}>
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: parseFloat(33.888630),
        longitude: parseFloat(35.495480),
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
      }}
    >
   <Marker 
coordinate={{latitude: 33.888630, longitude: 35.496}}
title="Grocery 1"
description="This is the first grocery" 
>
 <Callout tooltip onPress={()=> console.log("GROCERIES")}> 
{<Callout tooltip onPress={()=>navigation.navigate('Order')}>
  <View>
    <View style={styles.marker_tooltip}>
      <Text style={styles.marker_title}>GROCERY ONE</Text>
      <Text>A SHORT DESCRIPTION</Text> 
       <Image 
        style={{width:120, height:80}} 
        source={require("../assets/icons/icons8-home-100.png")}
      /> 
    </View>
    <View style={styles.arrow_border}/>
    <View style={styles.arrow}/>
  </View>
</Callout>
</Marker>

<Marker 
coordinate={{latitude: 33.9, longitude: 35.496}}
title="Grocery 2"
description="This is the second grocery" 
/> */
}
