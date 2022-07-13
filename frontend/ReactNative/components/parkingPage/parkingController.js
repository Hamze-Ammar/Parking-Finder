import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStorage.removeItem("token");

// Get Parking from server
export const getParkingById = async (id) => {
  let token = await AsyncStorage.getItem("token");
  //   console.log({ token });
  //Just in case
  if (!token) {
    return;
  }

  const res = await fetch(
    "http://192.168.1.95:8000/api/v1/user/viewParking/1",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  if (data.status === "Success") {
    return data;
  } else {
    return null;
  }
};

// getParkingById("1");
