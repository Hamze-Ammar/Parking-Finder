import { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
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
  const [id, setId] = useState();
  const [isAddingFavorite, setIsAddingFavorite] = useState(false);
  const [cityName, setCityName] = useState();
  const [isSaved, setIsSaved] = useState();
  const [myParking, setMyParking] = useState();
  // Should get it later from params
  const [parkingId, setParkingId] = useState("1");
  const [toggleFavorite, setToggleFavorite] = useState(0);

  console.log({ isSaved });

  useEffect(() => {
    if (route?.params) {
      const param = route.params;
      if (param?.city) {
        setCityName(param.city);
      }
    }
  }, []);

  // Once we got here we need also to check if the user has marked this parking as favourite
  useEffect(() => {
    const favorites = favoritesCtx.favoriteParkings;
    const res = checkIfSaved(favorites, parkingId);
    setIsSaved(res);
    console.log("is there favourites detected?: ", res);
  }, []);

  useEffect(() => {
    if (!!toggleFavorite) {
      console.log({ toggleFavorite });
      if (isSaved) {
        removeFromFavorite();
        setIsSaved(false);
      } else {
        addToFavorite();
        setIsSaved(true);
      }
    }
  }, [toggleFavorite]);

  // When adding new favorite call addToFavorite component
  // to handle the process
  const addToFavorite = () => {
    if (isSaved) {
      return;
    }
    // let parking = parseParking(myParking);
    // await favoritesCtx.addNewFavorite(parking);
    // console.log(parking);
    console.log("add:", isSaved);

    console.log("add:", isSaved);
  };

  const removeFromFavorite = () => {
    if (!isSaved) {
      return;
    }
    // let parking = parseParking(myParking);
    // console.log(parking);
    // await favoritesCtx.deleteFavorite(parking);
    console.log("remove:", isSaved);
    // setIsSaved(false);
    // console.log("remove:", isSaved);
  };

  // Define bookmark icon filled for saved, void otherwise
  const emptyBookmark = (
    <Ionicons
      style={{ marginRight: 15 }}
      name="md-bookmark-outline"
      color={Colors.background200}
      size={30}
      onPress={() => {
        setToggleFavorite(toggleFavorite + 1);
      }}
    />
  );

  const filledBookmark = (
    <Ionicons
      style={{ marginRight: 15 }}
      name="bookmark"
      color={Colors.marked400}
      size={30}
      onPress={() => {
        setToggleFavorite(toggleFavorite + 1);
      }}
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
      title: title && title,
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: Colors.background200,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => (isSaved ? filledBookmark : emptyBookmark),
      // headerRight: () => emptyBookmark,
    });
  }, []);

  return (
    <>
      <ParkingView
        setMyParking={setMyParking}
        parkingId={parkingId}
        setTitle={setTitle}
        cityName={cityName}
      />
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
