import { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { ParkingContext } from "../../store/parkingContext";
import ParkingView from "../../components/parkingPage/ParkingView";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { checkIfSaved } from "../../components/parkingPage/parkingController";
import { FavoritesContext } from "../../store/favorites-context";
import { parseParking } from "../../components/parkingPage/parkingController";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../ui/Title";

const ParkingScreen = ({ route, navigation }) => {
  const parkingCtx = useContext(ParkingContext);
  const favoritesCtx = useContext(FavoritesContext);
  const [title, setTitle] = useState();
  const [cityName, setCityName] = useState();
  const [isSaved, setIsSaved] = useState();
  const [myParking, setMyParking] = useState();
  const [parkingId, setParkingId] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => {
    if (route?.params) {
      const param = route.params;
      if (param?.city) {
        setCityName(param.city);
        setParkingId(param.id);
        setDuration(param.duration);
      }
    }
  });

  // Once we got here we need also to check if the user has marked this parking as favourite
  useEffect(() => {
    const RefreshMemory = async () => {
      const favorites = await favoritesCtx.favoriteParkings;
      const res = checkIfSaved(favorites, parkingId);
      // console.log("res      ", res);
      setIsSaved(res);
    };
    RefreshMemory();
  }, [parkingId, favoritesCtx.favoriteParkings]);

  // When adding new favorite call addToFavorite component
  // to handle the process
  const addToFavorite = async () => {
    if (isSaved) {
      return;
    }
    let parking = parseParking(myParking);
    let response = await favoritesCtx.addNewFavorite(parking);
    // console.log({ response });
    setIsSaved(response);
    // console.log("adding......");
  };

  const removeFromFavorite = async () => {
    if (!isSaved) {
      return;
    }
    let parking = parseParking(myParking);
    await favoritesCtx.deleteFavorite(parking.id);
    setIsSaved(false);
  };

  const filledBookmark = (
    <>
      <View style={styles.iconHeaderContainer}>
        <Ionicons
          style={{ marginRight: 15 }}
          name="bookmark"
          color={Colors.marked400}
          size={30}
          onPress={removeFromFavorite}
        />
        <FontAwesome
          onPress={() => {
            parkingCtx.toggleRefresh();
          }}
          name="refresh"
          size={24}
          color="white"
        />
      </View>
    </>
  );
  const emptyBookmark = (
    <>
      <View style={styles.iconHeaderContainer}>
        <Ionicons
          style={{ marginRight: 15 }}
          name="bookmark-outline"
          color="white"
          size={30}
          onPress={addToFavorite}
        />
        <FontAwesome
          onPress={() => {
            parkingCtx.toggleRefresh();
          }}
          name="refresh"
          size={24}
          color="white"
        />
      </View>
    </>
  );

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
      title: title,
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: Colors.background200,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => {
        return isSaved ? filledBookmark : emptyBookmark;
      },
    });
  }, [title, isSaved]);

  return (
    <>
      {parkingId ? (
        <ParkingView
          setMyParking={setMyParking}
          parkingId={parkingId}
          setTitle={setTitle}
          cityName={cityName}
          duration={duration}
        />
      ) : (
        <View style={styles.notFoundTxt}>
          <Title>No Parking Selected</Title>
        </View>
      )}
    </>
  );
};

export default ParkingScreen;

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    color: Colors.secondary500,
  },
  notFoundTxt: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});
