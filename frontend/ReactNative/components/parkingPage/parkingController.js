import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import { URL } from "../../constants/backendSync";

// const authCtx = useContext(AuthContext);

// AsyncStorage.removeItem("token");

// Get Parking from server
export const getParkingById = async (id) => {
  let token = await AsyncStorage.getItem("token");

  //Just in case
  if (!token) {
    return;
  }

  const res = await fetch(`${URL}/user/viewParking/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    // console.log(data.res.id);
    return data;
  } else {
    return false;
  }
};

// Send Request Reservation
export const sendReservation = async (id) => {
  console.log("reservation sent on slot:  ", id);
  let token = await AsyncStorage.getItem("token");
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/user/makeReservation/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    // console.log(data);
    return data;
  } else {
    return false;
  }
};

// sendReservation("67");

export const addToFavorite = async (id) => {
  if (!id) {
    console.log("id not found");
    return;
  }
  console.log(id);
  let token = await AsyncStorage.getItem("token");

  //Just in case
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/user/addToFavorite/${id}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    console.log(data);
    return data;
  } else {
    return false;
  }
};
