import AsyncStorage from "@react-native-async-storage/async-storage";
// import { registerRootComponent } from "expo";

import { createContext, useState } from "react";
// import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";

export const FavoritesContext = createContext({
  favoriteParkings: [],
  storeFavorites: (parkings) => {},
  addNewFavorite: (parking) => {},
  deleteFavorite: (parking) => {},
});

function FavoritesContextProvider({ children }) {
  //should be an array of objects
  const [savedParkings, setSavedParkings] = useState([]);
  console.log("===========================================");
  console.log(savedParkings);
  console.log("===========================================");

  // on sign in
  function storeFavorites(favorites) {
    setSavedParkings(favorites);
    AsyncStorage.setItem("favorites", JSON.stringify(savedParkings));
  }

  // On add new favorite; update both local storage and context
  async function addNewFavorite(parking) {
    setSavedParkings((savedParkings) => [...savedParkings, parking]);
    await AsyncStorage.setItem("favorites", JSON.stringify(savedParkings));
    return true;
  }

  // On delete favorite; update both local storage and context
  async function deleteFavorite(id) {
    // console.log({ id });
    // console.log("item is being removed");

    setSavedParkings(
      savedParkings.filter((item) => String(item.id) !== String(id))
    );
    await AsyncStorage.setItem("favorites", JSON.stringify(savedParkings));
    return true;
  }

  const value = {
    favoriteParkings: savedParkings,
    storeFavorites: storeFavorites,
    addNewFavorite: addNewFavorite,
    deleteFavorite: deleteFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
