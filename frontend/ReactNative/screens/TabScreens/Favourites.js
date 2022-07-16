import { StyleSheet, FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import Title from "../../ui/Title";
import Row from "../../ui/Row";

import { getFavouriteParkings } from "../../components/favorites/favoriteController";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { FavoritesContext } from "../../store/favorites-context";

const Favourites = () => {
  const favCtx = useContext(FavoritesContext);
  const [parkingList, setParkingList] = useState(
    favCtx.favoriteParkings || null
  );
  console.log(parkingList);

  function renderFavourites(itemData) {
    console.log(itemData);
    const item = itemData.item;
    const parkings = {
      id: item.id,
      name: item.name,
      address: item.address,
      totalSlots: item.total_slots,
      openAt: item.opening_hr,
      closeAt: item.closing_hr,
    };
    return (
      <Pressable>
        <Row {...parkings} />
      </Pressable>
    );
  }

  return (
    <View>
      <Title myFontSize={30}>Favourite Parkings</Title>
      <View style={styles.container}>
        {parkingList && (
          <FlatList
            data={parkingList}
            keyExtractor={(item) => item.id}
            renderItem={renderFavourites}
          />
        )}
        {/* {parkingList &&
          parkingList.map((parking) => {
            return (
              <Row
                key={parking.id}
                id={parking.id}
                name={parking.name}
                address={parking.address}
                totalSlots={parking.total_slots}
                openAt={parking.opening_hr}
                closeAt={parking.closing_hr}
              />
            );
          })} */}
      </View>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
});
