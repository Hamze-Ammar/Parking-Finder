// import { registerRootComponent } from "expo";

import { createContext, useState, useEffect } from "react";

// import {
//   addToFavorite,
//   delFavFromServer,
// } from "../components/favorites/favoriteController";

// import { AuthContext } from "./auth-context";

export const ParkingContext = createContext({
  refresh: "",
  toggleRefresh: () => {},
});

function ParkingContextProvider({ children }) {
  const [myRefresh, setMyRefresh] = useState(1);


  // on sign in
  function updateRefresh() {
    // console.log("triggered");
    // console.log(myRefresh);
    let x = Math.random();
    setMyRefresh(x);
  }

  const value = {
    refresh: myRefresh,
    toggleRefresh: updateRefresh,
  };

  return (
    <ParkingContext.Provider value={value}>{children}</ParkingContext.Provider>
  );
}

export default ParkingContextProvider;
