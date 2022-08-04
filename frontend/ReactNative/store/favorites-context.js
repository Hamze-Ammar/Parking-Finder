import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useState, useContext } from "react";
import {
  addToFavorite,
  delFavFromServer,
} from "../components/favorites/favoriteController";

import { AuthContext } from "./auth-context";

export const FavoritesContext = createContext({
  favoriteParkings: [],
  storeFavorites: (parkings) => {},
  addNewFavorite: (parking) => {},
  deleteFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const authCtx = useContext(AuthContext);

  //should be an array of objects
  const [savedParkings, setSavedParkings] = useState([]);

  // on sign in
  function storeFavorites(favorites) {
    setSavedParkings(favorites);
    AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  }

  // On add new favorite; update both local storage and context
  async function addNewFavorite(parking) {
    setSavedParkings((savedParkings) => [...savedParkings, parking]);
    await addToFavorite(parking.id, authCtx.token);

    return true;
  }

  // On delete favorite; update both local storage and context
  async function deleteFavorite(id) {

    setSavedParkings(
      savedParkings.filter((item) => String(item.id) !== String(id))
    );
    await delFavFromServer(id, authCtx.token);
    return id;
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
