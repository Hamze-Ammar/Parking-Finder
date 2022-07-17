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
  // on sign in
  function storeFavorites(favorites) {
    setSavedParkings(favorites);
    AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  }

  // On add new favorite; update both local storage and context
  async function addNewFavorite(parking) {
    await setSavedParkings((savedParkings) => [...savedParkings, parking]);
    // AsyncStorage.setItem("favorites", JSON.stringify(savedParkings));
  }

  // On delete favorite; update both local storage and context
  function deleteFavorite(parking) {
    console.log({ parking });
    setSavedParkings(
      savedParkings.filter((item) => String(item.id) !== String(parking.id))
    );
    AsyncStorage.setItem("favorites", JSON.stringify(savedParkings));
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
