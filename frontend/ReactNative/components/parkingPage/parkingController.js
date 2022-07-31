// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useContext } from "react";
// import { AuthContext } from "../../store/auth-context";
import { URL } from "../../constants/backendSync";
import { Alert } from "react-native";

// const authCtx = useContext(AuthContext);

// AsyncStorage.removeItem("token");

// Get Parking from server
export const getParkingById = async (id, token) => {
  // let token = await AsyncStorage.getItem("token");
  // console.log(token);
  //Just in case
  if (!token) {
    return;
  }
  // console.log(token, id);

  const res = await fetch(`${URL}/user/viewParking/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  // console.log(data);
  if (data.status === "Failure") {
    Alert.alert("Connection Timed Out", "Please Try again");
  }
  if (data.status === "Success") {
    // console.log("fetch      ", data.res.id);
    return data;
  } else {
    return false;
  }
};

// Send Request make Reservation
export const sendReservation = async (id, duration, token) => {

  if (!token) {
    return;
  }
  let info = {
    id: id,
    duration: duration,
  };
  console.log({ info });
  // return;
  const res = await fetch(`${URL}/user/makeReservation`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
    body: JSON.stringify(info),
  });
  const data = await res.json();
  console.log(data);
  if (data.status === "Success") {
    return data;
  } else {
    return false;
  }
};

// sendReservation("67");

export const checkIfSaved = (list, id) => {
  if (list.length === 0 || !id) {
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    if (String(list[i].id) === String(id)) {
      return true;
    }
  }
  return false;
};

export const parseParking = (parking) => {
  if (!parking) {
    return;
  }
  let res = {
    id: parking.res.id,
    name: parking.res.name,
    total_slots: parking.res.total_slots,
    address: parking.res.city.name,
    opening_hr: parking.res.opening_hr,
    closing_hr: parking.res.closing_hr,
  };
  return res;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
