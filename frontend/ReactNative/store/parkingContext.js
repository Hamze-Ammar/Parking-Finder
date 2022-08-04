import { createContext, useState, useEffect } from "react";


export const ParkingContext = createContext({
  refresh: "",
  toggleRefresh: () => {},
});

function ParkingContextProvider({ children }) {
  const [myRefresh, setMyRefresh] = useState(1);


  // on sign in
  function updateRefresh() {
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
