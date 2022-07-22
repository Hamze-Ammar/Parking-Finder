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
import Row from "../../components/favorites/Row";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../store/favorites-context";

// Pull to refresh timeout
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Favorites = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [reset, setReset] = useState(false);
  const favCtx = useContext(FavoritesContext);
  const [parkingList, setParkingList] = useState(
    favCtx.favoriteParkings || null
  );
  // console.log("context: ", favCtx.favoriteParkings);
  // console.log("mylist: ", parkingList);

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
  }, [reset, favCtx.favoriteParkings]);

  useEffect(() => {
    setParkingList(favCtx.favoriteParkings);
    setReset(false);
  }, [refreshing]);

  function renderFavorites(itemData) {
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
    return <Row {...parkings} deleteFavorite={deleteFavorite} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {!parkingList.length && (
          <View style={styles.titleContainer}>
            <Title myFontSize={15}>No Saved Parkings were Found</Title>
          </View>
        )}

        <View style={styles.container}>
          {/* {refreshing ? <ActivityIndicator /> : null} */}
          {parkingList && (
            <FlatList
              data={parkingList}
              keyExtractor={(item) => item.id}
              renderItem={renderFavorites}
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

export default Favorites;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  titleContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
