import React from "react";
import {
  StyleSheet,
  FlatList,
  Pressable,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Title from "../../ui/Title";
import Row from "../../ui/Row";
import MsgNotFound from "../../components/favorites/MsgNotFound";

// import { getFavouriteParkings } from "../../components/favorites/favoriteController";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../store/auth-context";
import { FavoritesContext } from "../../store/favorites-context";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Favourites = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [reset, setReset] = useState(false);
  const favCtx = useContext(FavoritesContext);
  const [parkingList, setParkingList] = useState(
    favCtx.favoriteParkings || null
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const deleteFavorite = (id) => {
    setReset(favCtx.deleteFavorite(id));
  };

  useEffect(() => {
    setParkingList(favCtx.favoriteParkings);
    setReset(false);
  }, [reset]);

  useEffect(() => {
    setParkingList(favCtx.favoriteParkings);
    setReset(false);
  }, [refreshing]);

  function renderFavourites(itemData) {
    // console.log(itemData);
    const item = itemData.item;
    const parkings = {
      id: item.id,
      name: item.name,
      address: item.address,
      totalSlots: item.total_slots,
      openAt: item.opening_hr,
      closeAt: item.closing_hr,
    };

    if (!parkings.length) {
      return <MsgNotFound />;
    }
    return <Row {...parkings} deleteFavorite={deleteFavorite} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Title myFontSize={30}>Favourite Parkings</Title>
        <View style={styles.container}>
          {/* {refreshing ? <ActivityIndicator /> : null} */}
          {parkingList && (
            <FlatList
              data={parkingList}
              keyExtractor={(item) => item.id}
              renderItem={renderFavourites}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
});
