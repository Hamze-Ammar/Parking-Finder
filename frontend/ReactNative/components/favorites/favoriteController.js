import { URL } from "../../constants/backendSync";

export const addToFavorite = async (id, token) => {
  if (!id) {
    console.log("id not found");
    return;
  }

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
    return data;
  } else {
    return false;
  }
};

export const getFavouriteParkings = async (token) => {
  //Just in case
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/info/getFavouriteParkings`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  // console.log(data);
  if (data.status === "Success") {
    let response = await handleResGetAllFav(data);
    // console.log("favoriteController, response", response);
    return response;
  } else {
    return false;
  }
};

// Parsing response
function handleResGetAllFav(data) {
  if (data?.res) {
    let parkings = [];
    data.res.map((item) => {
      // console.log("idparkingcheck: ", item.parking_info.id);
      let parking = {
        id: item.parking_info.id,
        name: item.parking_info.name,
        total_slots: item.parking_info.total_slots,
        address: item.parking_address,
        opening_hr: item.parking_info.opening_hr,
        closing_hr: item.parking_info.closing_hr,
      };
      parkings.push(parking);
    });
    return parkings;
  }
}

export const delFavFromServer = async (id, token) => {
  // http://192.168.101.16:8000/api/v1/user/removeFromFavorite/3

  if (!id || !token) {
    return;
  }

  const res = await fetch(`${URL}/user/removeFromFavorite/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  // console.log(data);
  if (data.status === "Success") {
    return data;
  } else {
    return false;
  }
};
