import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../../constants/styles";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const PopupParking = ({ parking, city }) => {
  const navigation = useNavigation();

  let id = parking?.id;
  let name = parking?.name;
  let opening_hr = parking?.opening_hr;
  let closing_hr = parking?.closing_hr;
  let distance = parking?.distance;
  let duration = parking?.duration;
  duration = duration / 60;

  distance < 1000
    ? (distance = `${distance} m `)
    : (distance = `${(distance / 1000).toFixed(2)} km `);

  duration < 60
    ? (duration = `${Math.ceil(duration)} minutes`)
    : (duration = `${Math.ceil(duration / 60)} hr`);

  // console.log(distance, duration);

  const [loaded] = useFonts({
    montserratBold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
    montserratLight: require("../../assets/fonts/Montserrat-Light.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <FontAwesome name="car" size={26} color={Colors.primary500} />
      </View>
      <View style={styles.middleContainer}>
        <Text style={[styles.text, styles.title]}>{name}</Text>
        <Text style={styles.text}>{distance} away</Text>
        <Text style={styles.text}>{duration}</Text>
        <Text style={styles.text}>
          Hours: {opening_hr} - {closing_hr}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Pressable style={({ pressed }) => pressed && styles.pressed}>
          <FontAwesome
            style={{ textAlign: "right" }}
            name="arrow-circle-right"
            size={40}
            color={Colors.primary500}
            onPress={() => {
              navigation.navigate("Parking", {
                city: city,
                id: id,
                duration: duration,
              });
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PopupParking;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: Colors.background200,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
    alignItems: "center",
  },
  leftContainer: {
    alignSelf: "flex-start",
  },
  middleContainer: {
    marginLeft: 15,
  },
  rightContainer: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 20,
    color: Colors.secondary500,
    fontFamily: "montserratBold",
  },
  text: {
    fontSize: 15,
    color: "#888",
    fontFamily: "montserratLight",
  },
  pressed: {
    opacity: 0.5,
  },
});
