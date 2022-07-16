import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favoriteParkings: [],
  //   isAuthenticated: false,
  addNewFavorite: () => {},
  deleteFavorite: () => {},
  //   logout: () => {},
  // favouriteParkings: [],
});

function FavoritesContextProvider({ children }) {
  //should be an array of objects
  const [savedParkings, setSavedParkings] = useState([]);

  // on sign in
  function storeFavorites(favorites) {
    setSavedParkings(favorites);
    // AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  }

  // On add new favorite; update both local storage and context
  async function addNewFavorite(parking) {
    console.log(parking);
    console.log({ savedParkings });

    // const temp = [...savedParkings, parking];
    // console.log({ temp });
    setSavedParkings((savedParkings) => [...savedParkings, parking]);
    AsyncStorage.setItem("favorites", JSON.stringify(savedParkings));
    // console.log(await AsyncStorage.getItem("favorites"));
  }

  // On delete favorite; update both local storage and context
  function deleteFavorite(parking) {
    setSavedParkings((savedParkings) => {
      const list = savedParkings.filter((item) => item.id !== parking.id);
      return list;
    });
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
