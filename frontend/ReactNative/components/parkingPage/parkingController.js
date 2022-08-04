
import { URL } from "../../constants/backendSync";
import { Alert } from "react-native";


// Get Parking from server
export const getParkingById = async (id, token) => {
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
  if (data.status === "Failure") {
    Alert.alert("Connection Timed Out", "Please Try again");
  }
  if (data.status === "Success") {
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
  if (data.status === "Success") {
    return data;
  } else {
    return false;
  }
};


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
