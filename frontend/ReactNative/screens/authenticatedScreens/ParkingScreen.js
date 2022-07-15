import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button,
  SafeAreaView,
} from "react-native";
import ParkingView from "../../components/parkingPage/ParkingView";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { addToFavorite } from "../../components/parkingPage/parkingController";

const ParkingScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <View style={styles.title}>
            <FontAwesome5
              name="parking"
              size={44}
              color={Colors.background200}
            />
          </View>
        );
      },
      title: title && title,
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: Colors.background200,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: ({ size }) => (
        <Ionicons
          style={{ marginRight: 15 }}
          name="md-bookmark-outline"
          color={Colors.background200}
          size={30}
          onPress={() => addToFavorite(id)}
        />
        // <AntDesign name="staro" size={24} color="black" />
      ),
    });
  }, []);

  if (route?.params) {
    const param = route.params;
    // const city_name = param.city[0].subregion;
    const city_name = param.city[0].subregion;
    return (
      <>
        {/* <StatusBar style="dark" /> */}
        <ParkingView
          setId={(e) => setId(e)}
          setTitle={(e) => setTitle(e)}
          city_name={city_name}
        />
      </>
    );
  }
  return (
    <SafeAreaView>
      {/* <StatusBar style="dark" barStyle="dark-content" /> */}
      <ParkingView setId={(e) => setId(e)} setTitle={(e) => setTitle(e)} />
    </SafeAreaView>
  );
};

export default ParkingScreen;

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    color: Colors.secondary500,
  },
});
