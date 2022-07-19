import { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getParkingByCityName } from "../../components/mapFolder/mapController";
import { FavoritesContext } from "../../store/favorites-context";
import { AuthContext } from "../../store/auth-context";

const MapScreen = ({ route, navigation }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState(authCtx.token || null);
  const [city, setCity] = useState(route?.params?.city || null);

  useEffect(() => {
    if (city && token) {
      getParkingByCityName(city, token);
    }
  }, [city, token]);

  const [x, setX] = useState({
    latitude: parseFloat(33.88),
    longitude: parseFloat(35.5),
  });
  return (
    <>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: parseFloat(33.8911743),
          longitude: parseFloat(35.5059504),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(33.8911743),
            longitude: parseFloat(35.5059504),
          }}
          title="PIN"
          description="You are here!"
          //   image={{
          //     uri: "https://cdn4.vectorstock.com/i/1000x1000/77/43/car-parking-icon-on-map-pointer-location-mark-vector-23097743.jpg",
          //   }}
        />
        <Marker
          coordinate={{
            latitude: parseFloat(33.9),
            longitude: parseFloat(35.51),
          }}
          title="PIN2"
          description="You are here!"
          onCalloutPress={() => {
            navigation.navigate("Parking", {
              city: "beirut",
              id: "1",
            });
          }}
        ></Marker>
        {/* Draggable
        <Marker
          draggable
          coordinate={x}
          onDragEnd={(e) => {
            console.log(e.nativeEvent.coordinate);
          }}
        /> */}
      </MapView>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
