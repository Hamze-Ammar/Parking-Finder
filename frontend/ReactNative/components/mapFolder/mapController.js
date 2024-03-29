import { URL } from "../../constants/backendSync";

export const getParkingByCityName = async ({ city, token }) => {
  if (!city || !token) {
    return;
  }
  const res = await fetch(`${URL}/info/getParkingsByCityName/${city}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    let response = await handleResponse(data);
    return response;
  } else {
    return false;
  }
};

export const findNearestParkings = async (latitude, longitude, radius, token) => {
  if (!latitude || !longitude || !token) {
    return;
  }
  const res = await fetch(
    `${URL}/info/nearestParkings?lat=${latitude}&long=${longitude}&radius=${radius}`,
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
    let response = await handleResponse(data);
    return response;
  } else {
    return false;
  }
};

function handleResponse(data) {
  if (!!data.res) {
    let parkings = [];
    data.res.map((item) => {
      let parking = {
        id: item.id,
        name: item.name,
        freeSlots: item.freeSlots,
        latitude: item.latitude,
        longitude: item.longitude,
        opening_hr: item.opening_hr,
        closing_hr: item.closing_hr,
      };
      parkings.push(parking);
    });
    return parkings;
  }
}

export const displayPopup = async ({ parking, latitude, longitude }) => {
  if (!parking) {
    return;
  }
  let latitudeDes = parking.latitude;
  let longitudeDes = parking.longitude;
  let response = await calculateDistance(
    latitude,
    longitude,
    latitudeDes,
    longitudeDes
  );
  if (response) {
    let distance = response.distances[0][0];
    let duration = response.durations[0][0];
    let obj = {
      id: parking.id,
      name: parking.name,
      opening_hr: parking.opening_hr,
      closing_hr: parking.closing_hr,
      distance: distance,
      duration: duration,
    };
    return obj;
  }
};

//=========
//https://rapidapi.com/trueway/api/trueway-matrix/details
const calculateDistance = (
  latitudeOrg,
  longitudeOrg,
  latitudeDes,
  longitudeDes
) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7dd0902cf9msha9e2a44c12f5bf9p1df25ejsn2054907ccc4a",
      "X-RapidAPI-Host": "trueway-matrix.p.rapidapi.com",
    },
  };
  let origin = `${latitudeOrg},${longitudeOrg}`;
  let destination = `${latitudeDes},${longitudeDes}`;
  return fetch(
    `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${origin}&destinations=${destination}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};
