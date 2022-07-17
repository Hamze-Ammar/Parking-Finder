import { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import ParkingView from "../../components/parkingPage/ParkingView";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { checkIfSaved } from "../../components/parkingPage/parkingController";
import { FavoritesContext } from "../../store/favorites-context";
import { parseParking } from "../../components/parkingPage/parkingController";

const ParkingScreen = ({ route, navigation }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const [title, setTitle] = useState();
  // const [isAddingFavorite, setIsAddingFavorite] = useState(false);
  const [cityName, setCityName] = useState();
  const [isSaved, setIsSaved] = useState();
  const [myParking, setMyParking] = useState();
  // Should get it later from params
  const [parkingId, setParkingId] = useState();
  // console.log(parkingId);
  // const [toggleFavorite, setToggleFavorite] = useState(0);
  // console.log({ toggleFavorite });
  // console.log("mn baraaaaaaaaaaaaaaaaaaaaa", parkingId);
  // console.log("144044440454555555555555", title);

  console.log({ isSaved });

  useEffect(() => {
    if (route?.params) {
      const param = route.params;
      if (param?.city) {
        setCityName(param.city);
        setParkingId(param.id);
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
  }, []);

  // When adding new favorite call addToFavorite component
  // to handle the process
  const addToFavorite = async () => {
    if (isSaved) {
      return;
    }
    let parking = parseParking(myParking);
    let response = await favoritesCtx.addNewFavorite(parking);
    console.log(response);
    setIsSaved(true);
  };

  const removeFromFavorite = async () => {
    if (!isSaved) {
      return;
    }
    let parking = parseParking(myParking);
    await favoritesCtx.deleteFavorite(parking);
    setIsSaved(false);
  };

  const filledBookmark = (
    <Ionicons
      style={{ marginRight: 15 }}
      name="bookmark"
      color={isSaved ? Colors.marked400 : Colors.background200}
      size={30}
      onPress={isSaved ? removeFromFavorite : addToFavorite}
    />
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
      headerRight: () => filledBookmark,
    });
  }, [title, isSaved]);

  return (
    <>
      {parkingId && (
        <ParkingView
          setMyParking={setMyParking}
          parkingId={parkingId}
          setTitle={setTitle}
          cityName={cityName}
        />
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
});
